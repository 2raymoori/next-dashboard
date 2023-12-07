"use client"
import {usePathname} from "next/navigation";

const Dashboard = ()=>{
    const pathName = usePathname();
    return (
        <div>
            {pathName}
            <h1>This is the Dashboard Section</h1>
        </div>
    )
}

export default Dashboard;
