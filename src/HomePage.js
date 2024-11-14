import React from 'react';

const HomePage = () => {

    const styles = {
        homepage: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        navbar: {
            backgroundColor: 'rgb(37, 37, 92)',
            color: 'white',
            padding: '20px',
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
        },
        navbarContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
        },
        logo: {
            margin: 0,
            fontSize: '24px',
        },
        navMenu: {
            display: 'flex',
        },
        navLink: {
            margin: '0 15px',
            fontSize: '18px',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        navLinkHover: {
            textDecoration: 'underline',
        },
        bg: {
            margin: 0,
            backgroundImage: 'url(https://www.freshbooks.com/wp-content/uploads/2022/02/different-types-of-accounting-systems.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '763px',
            fontFamily: 'sans-serif',
        },
        bgText: {
            fontSize: '50px',
            color: 'rgb(71, 68, 68)',
            fontWeight: 'bolder',
            marginTop: '100px',
            marginLeft: '200px',
            fontFamily: 'Poppins, sans-serif',
        },
        para: {
            fontSize: '20px',
            color: 'rgb(47, 46, 46)',
            padding: '10px',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            wordSpacing: '1px',
            letterSpacing: '1px',
            lineHeight: '25px',
        },
        button: {
            backgroundColor: 'rgb(37, 37, 92)',
            fontSize: '30px',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid rgb(37, 37, 92)',
            color: 'white',
            textAlign: 'center',
            marginLeft: '250px',
        },
        buttonHover: {
            backgroundColor: 'rgb(76, 121, 161)',
            border: '1px solid rgb(76, 121, 161)',
        },
        footer: {
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#333',
            color: 'white',
        }
    };

    return (
        <div style={styles.homepage}>
            <header style={styles.navbar}>
                <div style={styles.navbarContainer}>
                    <h1 style={styles.logo}>Accounting System</h1>
                    <nav style={styles.navMenu}>
                        <a href="/home" style={styles.navLink}>Home</a>
                        <a href="/features" style={styles.navLink}>Features</a>
                        <a href="/reports" style={styles.navLink}>Reports</a>
                        <a href="/transactions" style={styles.navLink}>Transaction</a> {/* New Transaction Link */}
                        <a href="/signup" style={styles.navLink}>Logout</a>
                    </nav>
                </div>
            </header>
            <div style={styles.bg}>
                <p style={styles.bgText}><strong>Accounting System</strong><br />Software in India<br />for Small Businesses</p>
                <p style={styles.para}>
                    Manage your business professionally. Using the best software for your billing, inventory & accounting needs.<br />
                    Be a part of 1 Cr+ SMEs in India who trust us.
                </p>
                <button type="button" style={styles.button}>Download App!</button>
            </div>
            <footer style={styles.footer}>
                <p>&copy; 2024 Accounting System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
