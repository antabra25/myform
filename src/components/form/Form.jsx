const Form = ({children, onSubmit, styles}) => {

    return (
        <form onSubmit={onSubmit}
              style={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  columnGap: '1rem',
                  rowGap: '2rem',
                  ...styles
              }}>
            {children}
        </form>
    );
}
export default Form;