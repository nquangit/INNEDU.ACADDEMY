import { PanelMenu } from "primereact/panelmenu";

export default function CourseSide() {
    const items = [
        {
            label: "Mầm non",
            icon: "pi pi-lightbulb",
            items: [
                {
                    label: "Chương trình khung",
                    icon: "pi pi-file",
                },
                {
                    label: "Tiếng anh STEAM",
                    icon: "pi pi-users",
                },
                {
                    label: "Dự án STEAM",
                    icon: "pi pi-users",
                },
                {
                    label: "Câu lạc bộ",
                    icon: "pi pi-users",
                },
            ],
        },
        {
            label: "K12",
            icon: "pi pi-book",
            items: [
                {
                    label: "Dự án",
                    icon: "pi pi-cloud-upload",
                },
            ],
        },
        {
            label: "Microsoft Academy",
            icon: "pi pi-desktop",
            items: [
                {
                    label: "Khoá học",
                    icon: "pi pi-cloud-upload",
                },
            ],
        },
    ];
    return (
        <div className="course-side">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    );
}
