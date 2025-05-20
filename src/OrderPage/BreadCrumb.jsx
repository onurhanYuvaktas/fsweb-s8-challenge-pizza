import { Link } from "react-router-dom"
export default function BreadCrumb(){
    return(
        <nav className="breadcrumb">
            <Link to="/">Ana Sayfa</Link> <span> &gt; </span> <span>Sipariş Oluştur</span>
        </nav>
    )
}
