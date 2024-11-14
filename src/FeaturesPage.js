import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesPage = () => {
    const navigate = useNavigate();

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            minHeight: '100vh',
        },
        heading: {
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px',
        },
        featureList: {
            listStyleType: 'none',
            padding: 0,
        },
        featureItem: {
            marginBottom: '15px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
        },
        buttonBack: {
            padding: '10px 20px',
            backgroundColor: 'rgb(37, 37, 92)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'block',
            margin: '20px auto',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Features of the Accounting System</h1>
            <ul style={styles.featureList}>
                <li style={styles.featureItem}>
                    <h2>Transaction Management</h2>
                    <p>Add, view, and delete transactions easily with our intuitive interface.</p>
                </li>
                <li style={styles.featureItem}>
                    <h2>Reporting</h2>
                    <p>Generate detailed reports to analyze your income and expenses over time.</p>
                </li>
                <li style={styles.featureItem}>
                    <h2>User-Friendly Interface</h2>
                    <p>Navigate through the system effortlessly with our clean and responsive design.</p>
                </li>
                <li style={styles.featureItem}>
                    <h2>Secure Data Storage</h2>
                    <p>All your financial data is stored securely, ensuring privacy and security.</p>
                </li>
                <li style={styles.featureItem}>
                    <h2>Customizable Settings</h2>
                    <p>Adjust settings to match your accounting preferences and workflows.</p>
                </li>
            </ul>
            <button onClick={() => navigate('/transactions')} style={styles.buttonBack}>
                Back to Transactions
            </button>
        </div>
    );
};

export default FeaturesPage;
