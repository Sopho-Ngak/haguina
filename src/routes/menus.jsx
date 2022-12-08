import {
    StarOutlined,
    DatabaseOutlined,
    UsergroupDeleteOutlined,
    InsuranceOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
const superAdmin = [
    {
        label: "Dashboard",
        key: "/sp/dashboard",
        icon: <StarOutlined />,
    },
    {
        label: "Clinic",
        key: "/clinic",
        icon: <StarOutlined />,
        children: [
            {
                label: "Create",
                key: "/sp/add-clinic",
            },
            {
                label: "Clinics",
                key: "/sp/list-clinics",
            },
        ],
    },
];
const Receptionist = [
    {
        label: "Dashboard",
        key: "/rec/dashboard",
        icon: <StarOutlined />,
    },
    {
        label: "Patient",
        key: "/patient",
        icon: <StarOutlined />,
        children: [
            {
                label: "Create",
                key: "/rec/register-patient",
            },
            {
                label: "Lists",
                key: "/rec/list-patients",
            },
        ],
    },
    {
        label: "Record",
        icon: <StarOutlined />,
        children: [
            {
                label: "List Records",
                key: "/rec/list-records",
            },
            {
                label: "Create",
                key: "/rec/search-patient",
            },
        ],
    },
];
const Nurse = [
    {
        label: "Dashboard",
        key:'/nurse/dashboard',
        icon: <StarOutlined />,
    },
    {
        label: "Requests",
        key: "/request",
        icon: <StarOutlined />,
        children: [
            {
                label: "Lists",
                key: "/nurse/list-requests",
            },
        ],
    },
];
const Doctor = [
    {
        label: "Dashboard",
        key:'/doc/dashboard',
        icon: <StarOutlined />,
    },
    {
        label: "Requests",
        key: "/request",
        icon: <StarOutlined />,
        children: [
            {
                label: "Lists",
                key: "/doc/list-requests",
            },
        ],
    },
];
const Labo = [
    {
        label: "Dashboard",
        key:"/labo/dashboard",
        icon: <StarOutlined />,
    },
    {
        label: "Requests",
        key: "/request",
        icon: <StarOutlined />,
        children: [
            {
                label: "Lists",
                key: "/labo/list-requests",
            },
        ],
    },
];
const Cashier = [
    {
        label: "Dashboard",
        icon: <StarOutlined />,
    },
    {
        label: "Invoices",
        icon: <StarOutlined />,
        children: [
            {
                label: "Lists",
                key: "/ca/search-patient",
            },
        ],
    },
];
const clinicAdmin = [
    {
        label: "Dashboard",
        key:"/clinic/dashboard",
        icon: <DatabaseOutlined />,
    },
    {
        label: "User",
        icon: <UsergroupDeleteOutlined />,
        children: [
            {
                label: "Create",
                key: "/clinic/add-user",
            },
            {
                label: "Lists",
                key: "/clinic/list-users",
            },
        ],
    },
    {
        label: "Insurances",
        icon: <InsuranceOutlined />,
        children: [
            {
                label: "Create",
                key: "/clinic/add-insurance",
            },
            {
                label: "Lists",
                key: "/clinic/list-insurances",
            },
        ],
    },
    {
        label: "Consultations",
        icon: <InfoCircleOutlined />,
        children: [
            {
                label: "Create",
                key: "/clinic/add-consultation",
            },
            {
                label: "Lists",
                key: "/clinic/list-consultations",
            },
        ],
    },
    {
        label: "Exams",
        icon: <InfoCircleOutlined />,
        children: [
            {
                label: "Create",
                key: "/clinic/add-exam",
            },
            {
                label: "Lists",
                key: "/clinic/list-exams",
            },
        ],
    },
    {
        label: "Price",
        icon: <InfoCircleOutlined />,
        children: [
            {
                label: "Create",
                key: "/clinic/add-price",
            },
            {
                label: "Lists",
                key: "/clinic/list-prices",
            },
        ],
    },
];
export const getMenus = (role) => {
    const value = role?.toLowerCase();
    switch (value) {
        case "clinic":
            return clinicAdmin;
        case "super_admin":
            return superAdmin;
        case "receptionist":
            return Receptionist;
        case "nurse":
            return Nurse;
        case "doctor":
            return Doctor;
        case "laborante":
            return Labo;
        case "cashier":
            return Cashier;
        default:
            return [{ label: "no menus", key: "/" }];
    }
};
