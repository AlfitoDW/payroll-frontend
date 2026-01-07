import { Outlet } from "react-router-dom";
import Topbar from "@/components/layout/Topbar";
import Sidebar from "./Sidebar";

export default function AppLayout() {
    return(
        <div className="flex min-h-screen bg-neutral-100">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}