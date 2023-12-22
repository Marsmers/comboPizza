import '../footer/footer.css'
export default function Footer() {
  return (
    <div className="footer">
      <div className='leftFooter'>

        <div className='contactsFooter'>
          <ul>
            <li><h3>Контакти</h3></li>
            <li><a href="tel:+380-66-051-82-46<">+380 66 051 82 46</a></li>
          </ul>
        </div>
        <div className='HoursWork'>
          <h3>Графік роботи</h3>
          <p>10:00 - 22:00</p>
          <p>Без вихідних</p>
        </div>
        <div className='delivery'>
          <h3>Безкоштовна доставка по місту</h3>
          <p>від 350 грн</p>
        </div>
      </div>
        <div className='maps'>
        <iframe className='googleMaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.930500183223!2d23.8436132!3d49.2587632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a6a02c0f4e9ed%3A0x862c1699b4bce246!2z0L_RgNC-0YHQv9C10LrRgiDQkifRj9GH0LXRgdC70LDQstCwINCn0L7RgNC90L7QstC-0LvQsCwgOSwg0KHRgtGA0LjQuSwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA4MjQwMA!5e0!3m2!1suk!2sua!4v1702407807656!5m2!1suk!2sua"   loading="lazy" ></iframe>
        </div>
    </div>
  )
}
