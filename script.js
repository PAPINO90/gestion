

async function loadExpenses() {
    try {
        const response = await fetch('http://localhost:3000/depense');
        const expenses = await response.json();

        const expenseTable = document.getElementById('expenseTable');
        expenseTable.innerHTML = expenses.map(expense => `
            <tr>
                <td>${expense.titre}</td>
                <td>${parseFloat(expense.montant).toFixed(2)} F CFA</td>
                <td><button class="btn-delete" onclick="deleteExpense(${expense.id})">Supprimer</button></td>
            </tr>
        `).join('');

        // Convertir les montants en nombres et calculer le total
        return expenses.reduce((total, expense) => total + parseFloat(expense.montant || 0), 0);
    } catch (error) {
        console.error('Erreur lors du chargement des dépenses :', error);
        return 0;
    }
}


async function loadRevenues() {
    try {
        const response = await fetch('http://localhost:3000/revenu');
        const revenues = await response.json();

        const revenuTable = document.getElementById('revenuTable');
        revenuTable.innerHTML = revenues.map(revenue => `
            <tr>
                <td>${revenue.titre}</td>
                <td>${parseFloat(revenue.montant).toFixed(2)} F CFA</td>
                <td><button class="btn-delete" onclick="deleteRevenue(${revenue.id})">Supprimer</button></td>
            </tr>
        `).join('');

        // Convertir les montants en nombres et calculer le total
        return revenues.reduce((total, revenue) => total + parseFloat(revenue.montant || 0), 0);
    } catch (error) {
        console.error('Erreur lors du chargement des revenus :', error);
        return 0;
    }
}

document.getElementById('expenseForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('expenseTitle').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    if (!title || isNaN(amount)) {
        alert('Veuillez entrer un titre valide et un montant valide.');
        return;
    }

    const expenseData = { titre: title, montant: amount };

    try {
        const response = await fetch('http://localhost:3000/depense', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expenseData),
        });

        if (response.ok) {
            alert('Dépense ajoutée avec succès !');
            window.location.href = 'index.html';
        } else {
            alert('Erreur lors de l\'ajout de la dépense.');
        }
    } catch (error) {
        console.error('Erreur réseau :', error);
    }
});


async function deleteExpense(id) {
    try {
        const response = await fetch(`http://localhost:3000/depense/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Dépense supprimée avec succès !');
            updateSummary(); // Recharge les données après suppression
        } else {
            alert('Erreur lors de la suppression de la dépense.');
        }
    } catch (error) {
        console.error('Erreur réseau :', error);
    }
}



async function deleteRevenue(id) {
    try {
        const response = await fetch(`http://localhost:3000/revenu/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Revenu supprimé avec succès !');
            updateSummary(); // Recharge les données après suppression
        } else {
            alert('Erreur lors de la suppression du revenu.');
        }
    } catch (error) {
        console.error('Erreur réseau :', error);
    }
}


document.getElementById('revenueForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('revenueTitle').value;
    const amount = parseFloat(document.getElementById('revenueAmount').value);

    if (!title || isNaN(amount)) {
        alert('Veuillez entrer un titre valide et un montant valide.');
        return;
    }

    const revenueData = { titre: title, montant: amount };

    try {
        const response = await fetch('http://localhost:3000/revenu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(revenueData),
        });

        if (response.ok) {
            alert('Revenu ajouté avec succès !');
            window.location.href = 'index.html';
        } else {
            alert('Erreur lors de l\'ajout du revenu.');
        }
    } catch (error) {
        console.error('Erreur réseau :', error);
    }
});


async function updateSummary() {
    const totalExpenses = await loadExpenses();
    const totalRevenues = await loadRevenues();
    const budget = totalRevenues; // Le budget est égal au total des revenus
    const balance = budget - totalExpenses; // Solde = Budget - Dépenses

    document.getElementById('budget').textContent = `${budget.toFixed(2)} F CFA`;
    document.getElementById('expenses').textContent = `${totalExpenses.toFixed(2)} F CFA`;
    document.getElementById('balance').textContent = `${balance.toFixed(2)} F CFA`;
}

window.onload = function() {
    updateSummary();
};






