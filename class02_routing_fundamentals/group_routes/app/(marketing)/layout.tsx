//Inside nested layouts, we won't return <html> and <body> tags as we are already have a top-level root layout where we are returning these tags.
import Sidebar from "@/components/Sidebar";


export default function layout({children}:{children:React.ReactNode}) {
  return (
    <section className="flex justify-between">
        {children}
        <Sidebar />
      
    </section>
  )
}
