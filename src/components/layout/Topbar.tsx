import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b border-neutral-200 flex items-center justify-end px-6">
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </header>
  )
}
