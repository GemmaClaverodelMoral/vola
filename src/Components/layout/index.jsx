import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'

const Layout = ({ children }) => {
 return (
    <div className="flex flex-col mt-28 justify-items-start items-center">
        {children}
    </div>
 )
}

// Agrega la validación para el prop 'children'
Layout.propTypes = {
    children: PropTypes.node.isRequired // Requiere que 'children' sea un nodo React y esté presente
  };

export {Layout}