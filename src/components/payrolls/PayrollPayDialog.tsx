import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import PayrollForm from "./PayrollForm"

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
  onSuccess: () => void
}

export default function PayrollDialog({ open, setOpen, onSuccess }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Payroll</DialogTitle>
        </DialogHeader>

        <PayrollForm
          onSuccess={() => {
            setOpen(false)
            onSuccess()
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
