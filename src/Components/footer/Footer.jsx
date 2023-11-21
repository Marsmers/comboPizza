import '../footer/footer.css'
export default function Footer() {
  return (
    <div className="footer">
        <div className='contactsFooter'>
            <h2>МИ ПРАЦЮЄМО БЕЗ ВИХІДНИХ</h2>
            <h1>10:00 - 22:00</h1>
            <h3>Наш Адрес : м.Стрий проспект Вячеслава Чорновола 1</h3>
        </div>
        <div className='maps'>
        <iframe className='googleMaps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10415.599153013856!2d23.8424566!3d49.2593453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a4d0febe1dfb1%3A0x3cbc0b1211baf4c5!2sKombo%20Pizza!5e0!3m2!1sru!2sua!4v1697649854462!5m2!1sru!2sua"  allowFullScreen="True" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
