import React, { useState } from 'react';

const TransactionPage = () => {
    // Sample initial transaction data
    const [transactions, setTransactions] = useState([
        { id: 1, date: '2024-10-20', amount: 1500, description: 'Office Supplies', type: 'Expense' },
        { id: 2, date: '2024-10-21', amount: 5000, description: 'Client Payment', type: 'Income' },
    ]);

    // State to manage new transaction form inputs
    const [newTransaction, setNewTransaction] = useState({
        id: '',
        date: '',
        amount: '',
        description: '',
        type: 'Expense', // Default to Expense
    });

    // State to manage the editing state
    const [isEditing, setIsEditing] = useState(false);
    
    // Handle input change in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({ ...newTransaction, [name]: value });
    };

    // Handle form submission to add or update a transaction
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            const updatedTransactions = transactions.map((transaction) =>
                transaction.id === newTransaction.id ? newTransaction : transaction
            );
            setTransactions(updatedTransactions);
        } else {
            const transactionId = transactions.length + 1; // Generate a new ID based on the list length
            setTransactions([...transactions, { id: transactionId, ...newTransaction }]);
        }
        setNewTransaction({ id: '', date: '', amount: '', description: '', type: 'Expense' }); // Reset the form
        setIsEditing(false); // Reset editing state
    };

    // Handle transaction deletion
    const handleDelete = (id) => {
        const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(updatedTransactions);
    };

    // Handle editing a transaction
    const handleEdit = (transaction) => {
        setNewTransaction(transaction);
        setIsEditing(true); // Set editing mode to true
    };

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundImage: 'url("https://financeonamission.com/wp-content/uploads/2023/08/data-visualozation.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.85)', // Adjusted opacity to 0.85
        },
        heading: {
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px',
            color: '#fff',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
        th: {
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#f4f4f4',
        },
        td: {
            border: '1px solid #ccc',
            padding: '10px',
            textAlign: 'center',
        },
        buttonDelete: {
            padding: '5px 10px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        buttonEdit: {
            padding: '5px 10px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        formContainer: {
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            maxWidth: '400px',
            margin: '20px auto',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        buttonAdd: {
            padding: '10px',
            backgroundColor: 'rgb(37, 37, 92)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        label: {
            fontSize: '16px',
            marginTop: '10px',
            color: '#fff',
        },
        header: {
            backgroundColor: 'rgb(37, 37, 92)',
            color: 'white',
            padding: '20px',
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between', // To separate the title and navigation
            alignItems: 'center', // Center items vertically
        },
        footer: {
            backgroundColor: 'rgb(37, 37, 92)',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            position: 'fixed',
            width: '100%',
            bottom: 0,
            left: 0,
        },
        navMenu: {
            display: 'flex',
            justifyContent: 'flex-end', // Align navigation to the right
            marginRight: '20px', // Add some space from the right edge
        },
        navLink: {
            margin: '0 15px',
            fontSize: '18px',
            color: 'white',
            textDecoration: 'none',
        },
        title: {
            marginLeft: '20px', // Space on the left side of the title
            fontSize: '24px',
        },
        mainContent: {
            paddingTop: '100px', // To prevent content from being hidden behind the header
            paddingBottom: '100px', // To prevent content from being hidden behind the footer
        },
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.title}>Accounting System</div> {/* Title on the left */}
                <div style={styles.navMenu}>
                    <a href="/home" style={styles.navLink}>Home</a>
                    <a href="/features" style={styles.navLink}>Features</a>
                    <a href="/reports" style={styles.navLink}>Reports</a>
                    <a href="/transactions" style={styles.navLink}>Transactions</a>
                    <a href="/logout" style={styles.navLink}>Logout</a>
                </div>
            </header>

            {/* Main Content */}
            <div style={styles.mainContent}>
                <h1 style={styles.heading}>Transaction Details</h1>
                {/* Transaction List */}
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Date</th>
                            <th style={styles.th}>Amount</th>
                            <th style={styles.th}>Description</th>
                            <th style={styles.th}>Type</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td style={styles.td}>{transaction.id}</td>
                                <td style={styles.td}>{transaction.date}</td>
                                <td style={styles.td}>{transaction.amount}</td>
                                <td style={styles.td}>{transaction.description}</td>
                                <td style={styles.td}>{transaction.type}</td>
                                <td style={styles.td}>
                                    <button
                                        style={styles.buttonEdit}
                                        onClick={() => handleEdit(transaction)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        style={styles.buttonDelete}
                                        onClick={() => handleDelete(transaction.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {/* Empty row for the new transaction */}
                        {(!isEditing) && (
                            <tr>
                                <td style={styles.td}>-</td>
                                <td style={styles.td}>-</td>
                                <td style={styles.td}>-</td>
                                <td style={styles.td}>-</td>
                                <td style={styles.td}>-</td>
                                <td style={styles.td}>-</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* New Transaction Form */}
                <div style={styles.formContainer}> {/* Box around the form */}
                    <form onSubmit={handleFormSubmit} style={styles.form}>
                        <label style={styles.label}>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={newTransaction.date}
                            onChange={handleInputChange}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Amount:</label>
                        <input
                            type="number"
                            name="amount"
                            value={newTransaction.amount}
                            onChange={handleInputChange}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={newTransaction.description}
                            onChange={handleInputChange}
                            style={styles.input}
                            required
                        />

                        <label style={styles.label}>Type:</label>
                        <select
                            name="type"
                            value={newTransaction.type}
                            onChange={handleInputChange}
                            style={styles.input}
                        >
                            <option value="Expense">Expense</option>
                            <option value="Income">Income</option>
                        </select>

                        <button type="submit" style={styles.buttonAdd}>
                            {isEditing ? 'Update Transaction' : 'Add Transaction'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; 2024 Accounting System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default TransactionPage;
