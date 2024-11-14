import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
    const navigate = useNavigate();

    const [dateRange, setDateRange] = useState({
        startDate: '',
        endDate: '',
    });

    const [filteredTransactions, setFilteredTransactions] = useState([]);

    // Sample transaction data (for demonstration)
    const transactions = [
        { id: 1, date: '2024-10-20', amount: 5000, description: 'Client Payment', type: 'Income' },
        { id: 2, date: '2024-10-21', amount: 1500, description: 'Office Supplies', type: 'Expense' },
        { id: 3, date: '2024-10-22', amount: 2000, description: 'Project Payment', type: 'Income' },
        { id: 4, date: '2024-10-23', amount: 800, description: 'Utilities', type: 'Expense' },
        { id: 5, date: '2024-10-24', amount: 1200, description: 'Software Subscription', type: 'Expense' },
    ];

    const handleBack = () => {
        navigate('/transactions'); // Navigate back to the Transactions page
    };

    // Handle filtering based on date range
    const handleFilter = () => {
        const { startDate, endDate } = dateRange;
        if (!startDate || !endDate) {
            alert("Please select both start and end dates.");
            return;
        }

        if (new Date(startDate) > new Date(endDate)) {
            alert("Start date must be earlier than end date.");
            return;
        }

        const filtered = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
        });
        setFilteredTransactions(filtered);
    };

    // Calculate totals
    const totalIncome = filteredTransactions
        .filter(t => t.type === 'Income')
        .reduce((acc, curr) => acc + curr.amount, 0);

    const totalExpense = filteredTransactions
        .filter(t => t.type === 'Expense')
        .reduce((acc, curr) => acc + curr.amount, 0);

    const netProfit = totalIncome - totalExpense;

    // Breakdown of expenses by category
    const expenseCategories = filteredTransactions
        .filter(t => t.type === 'Expense')
        .reduce((acc, curr) => {
            acc[curr.description] = (acc[curr.description] || 0) + curr.amount;
            return acc;
        }, {});

    // Income sources summary
    const incomeSources = filteredTransactions
        .filter(t => t.type === 'Income')
        .reduce((acc, curr) => {
            acc[curr.description] = (acc[curr.description] || 0) + curr.amount;
            return acc;
        }, {});

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: '#f4f4f4',
            minHeight: '100vh',
        },
        heading: {
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px',
            color: '#333',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
            backgroundColor: 'white',
        },
        th: {
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#eaeaea',
        },
        td: {
            border: '1px solid #ccc',
            padding: '10px',
            textAlign: 'center',
        },
        buttonBack: {
            padding: '10px',
            backgroundColor: 'rgb(37, 37, 92)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
        },
        filterContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '20px',
        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '45%', // Adjust width for better spacing
        },
        summarySection: {
            margin: '20px 0',
        },
        notesSection: {
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#fff',
        },
        buttonFilter: {
            padding: '10px',
            backgroundColor: 'rgb(37, 37, 92)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        header: {
            backgroundColor: '#333',
            color: 'white',
            padding: '10px 0',
            textAlign: 'center',
        },
        footer: {
            backgroundColor: '#333',
            color: 'white',
            padding: '10px 0',
            textAlign: 'center',
            position: 'fixed',
            width: '100%',
            bottom: 0,
        },
    };

    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <h1>Company Accounting System</h1>
                <p>Your trusted platform for financial reports and transactions</p>
            </header>

            <h1 style={styles.heading}>Reports</h1>

            <div style={styles.filterContainer}>
                <input
                    type="date"
                    value={dateRange.startDate}
                    onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="date"
                    value={dateRange.endDate}
                    onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
                    style={styles.input}
                />
                <button onClick={handleFilter} style={styles.buttonFilter}>Filter</button>
            </div>

            {/* Summary Stats */}
            <h2 style={styles.heading}>Summary Statistics</h2>
            <p><strong>Total Income:</strong> ${totalIncome.toFixed(2)}</p>
            <p><strong>Total Expense:</strong> ${totalExpense.toFixed(2)}</p>
            <p><strong>Net Profit:</strong> ${netProfit.toFixed(2)}</p>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Report ID</th>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Total Income</th>
                        <th style={styles.th}>Total Expense</th>
                        <th style={styles.th}>Net Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.length === 0 ? (
                        <tr>
                            <td colSpan="5" style={styles.td}>No transactions found for this date range.</td>
                        </tr>
                    ) : (
                        filteredTransactions.map((transaction, index) => (
                            <tr key={transaction.id}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{transaction.date}</td>
                                <td style={styles.td}>{transaction.type === 'Income' ? transaction.amount.toFixed(2) : 0}</td>
                                <td style={styles.td}>{transaction.type === 'Expense' ? transaction.amount.toFixed(2) : 0}</td>
                                <td style={styles.td}>{transaction.type === 'Income' ? transaction.amount.toFixed(2) : -transaction.amount.toFixed(2)}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Breakdown of Expenses by Category */}
            <h2 style={styles.heading}>Expense Breakdown</h2>
            <ul>
                {Object.entries(expenseCategories).length === 0 ? (
                    <li>No expenses to display.</li>
                ) : (
                    Object.entries(expenseCategories).map(([category, amount]) => (
                        <li key={category}>{category}: ${amount.toFixed(2)}</li>
                    ))
                )}
            </ul>

            {/* Income Sources Summary */}
            <h2 style={styles.heading}>Income Sources Summary</h2>
            <ul>
                {Object.entries(incomeSources).length === 0 ? (
                    <li>No income to display.</li>
                ) : (
                    Object.entries(incomeSources).map(([source, amount]) => (
                        <li key={source}>{source}: ${amount.toFixed(2)}</li>
                    ))
                )}
            </ul>

            {/* Notes Section */}
            <div style={styles.notesSection}>
                <h3>Notes</h3>
                <p>Review the above reports to analyze the financial performance of the business. Pay special attention to areas where expenses can be reduced.</p>
            </div>

            <button onClick={handleBack} style={styles.buttonBack}>
                Back to Transactions
            </button>

            {/* Footer Section */}
            <footer style={styles.footer}>
                <p>© 2024 Company Name | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default ReportPage;
