const WhatsAppButton = () => {
    const telefono = '573134427727'; // Número de teléfono predeterminado (agrega el prefijo internacional si es necesario)

    return (
        <a
            href={`https://wa.me/${telefono}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
        >
            <img src="public\assets\whatsapp.png" alt="WhatsApp"></img>
        </a>
    );
};

export { WhatsAppButton };