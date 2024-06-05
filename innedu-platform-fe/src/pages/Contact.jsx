import ContactForm from "../components/ContactForm/ContactForm";

import { Divider } from "primereact/divider";

export default function Contact() {

    const style = {
        width: "100%",
        maxWidth: "1100px",
        margin: "auto",
        paddingBottom: "30px",
        lineHeight: "2",
    };

    return (
        <div style={style}>
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    color: "#fff"
                }}
            >
                Liên hệ
            </h2>
            <Divider />
            <ContactForm />
        </div>
    );
}
