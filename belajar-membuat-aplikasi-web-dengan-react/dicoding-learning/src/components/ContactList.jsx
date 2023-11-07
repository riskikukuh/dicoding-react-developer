import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />
                ))
            }
        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactList;