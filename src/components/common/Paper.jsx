const Paper = ({children, styles}) => {

    return (
        <div className="paper-container" style={{
            boxShadow: '4px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            borderRadius: '8px',
            padding: '2rem',
            backgroundColor: '#1E2749',
            width: '800px',
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'row nowrap', ...styles
        }}>
            <div className="paper" style={{
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: '#FAFAFF',
                width: '100%',
                display: ' flex',
                flexDirection: 'column'
            }}>
                {children}
            </div>
        </div>
    )
}

export default Paper;