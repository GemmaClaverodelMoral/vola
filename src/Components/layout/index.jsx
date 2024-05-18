import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'

const Layout = ({ children }) => {
 return (
    <div className="flex flex-col mt-20 justify-items-start items-center">
        {children}
    </div>
 )
}

// Agrega la validación para el prop 'children'
Layout.propTypes = {
    children: PropTypes.node // Requiere que 'children' sea un nodo React y esté presente
  };

export {Layout}