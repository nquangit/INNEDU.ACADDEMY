import UserForm from "../components/UserForm/UserForm";
import loginBackground from "../assets/img/loginbackground.jpg"

export default function Auth() {
    return (
        <div style={{
            minHeight: "100vh",
            background: `url(${loginBackground})`,
            backgroundSize: "cover",
        }}>
            <UserForm />
        </div>
    );
}
