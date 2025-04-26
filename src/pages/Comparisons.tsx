
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Comparisons = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* Навигационная панель */}
      <header className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
        <div className="flex items-center space-x-1">
          <Link to="/" className="font-bold text-lg">Binary Epoch</Link>
        </div>
        <nav className="flex space-x-4 text-sm">
          <Link to="/" className="hover:text-blue-500">Главная страница</Link>
          <Link to="/processors" className="hover:text-blue-500">Процессоры</Link>
          <Link to="/comparisons" className="font-medium text-blue-500">Сравнение</Link>
          <Link to="/market" className="hover:text-blue-500">Binary Market</Link>
          <Link to="/news" className="hover:text-blue-500">Новости</Link>
          <Link to="/contacts" className="hover:text-blue-500">Контакты</Link>
        </nav>
        <div>
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-2">Всё о процессорах на Binary Epoch</h1>
        <p className="text-center text-gray-600 mb-6">
          Процессорные новости, маркет для покупки и продажи LГП, а также покупка процессоров непосредственно от нашей компании.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Смотреть все сравнения</Button>
          <Button variant="outline">Сравнить процессоры</Button>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Сравнение процессоров</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="p-6 bg-white shadow-sm rounded-lg">
            <h3 className="text-xl font-medium mb-4">Intel Core i9-14900K vs AMD Ryzen 9 7950X</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Ядра/Потоки</span>
                <div className="flex gap-x-4">
                  <span className="font-medium">24/32</span>
                  <span className="font-medium">16/32</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Базовая частота</span>
                <div className="flex gap-x-4">
                  <span className="font-medium">3.2 ГГц</span>
                  <span className="font-medium">4.5 ГГц</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Турбо частота</span>
                <div className="flex gap-x-4">
                  <span className="font-medium">6.0 ГГц</span>
                  <span className="font-medium">5.7 ГГц</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full" variant="outline">Перейти к полному сравнению</Button>
            </div>
          </Card>

          <Card className="p-6 bg-white shadow-sm rounded-lg">
            <h3 className="text-xl font-medium mb-4">AMD Ryzen 7 7800X3D vs Intel Core i7-13700K</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Ядра/Потоки</span>
                <div className="flex gap-x-4">
                  <span className="font-medium">8/16</span>
                  <span className="font-medium">16/24</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Базовая частота</span>
                <div className="flex gap-x-4">
                  <span className="font-medium">4.2 ГГц</span>
                  <span className="font-medium">3.4 ГГц</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Кэш L3</span>
                <div className="flex gap-x-4">
                  <span className="font-medium">96 МБ</span>
                  <span className="font-medium">30 МБ</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full" variant="outline">Перейти к полному сравнению</Button>
            </div>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Популярные сравнения</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {["Intel vs AMD", "Новое поколение vs Старое", "Игровые vs Рабочие станции"].map((title, index) => (
            <Card key={index} className="p-4 bg-white shadow-sm rounded-lg">
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <h3 className="font-medium mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-3">Подробное сравнение характеристик и производительности</p>
                <Button variant="outline" size="sm" className="mt-auto w-full">Перейти</Button>
              </div>
            </Card>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Инструменты сравнения</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Сравнение до 4 процессоров</h3>
              <p className="text-gray-600 mb-4">Выберите до четырех процессоров для детального сравнения всех характеристик и бенчмарков</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Начать сравнение</Button>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Рейтинги процессоров</h3>
              <p className="text-gray-600 mb-4">Ознакомьтесь с рейтингами процессоров по различным показателям и категориям</p>
              <Button variant="outline">Смотреть рейтинги</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Подписка на новости */}
      <section className="bg-[#F5F7FB] py-10">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-2">Подпишитесь на новости</h2>
          <p className="text-gray-600 mb-6">Получайте последние новости и обзоры прямо на вашу почту</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Введите email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600">Подписаться</Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#F5F7FB] py-10 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Binary Epoch</h3>
              <p className="text-sm text-gray-600">Ваш поставщик и источник информации о процессорах.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-blue-500">Главная</Link></li>
                <li><Link to="/processors" className="text-gray-600 hover:text-blue-500">Процессоры</Link></li>
                <li><Link to="/comparisons" className="text-gray-600 hover:text-blue-500">Сравнения</Link></li>
                <li><Link to="/news" className="text-gray-600 hover:text-blue-500">Новости</Link></li>
                <li><Link to="/market" className="text-gray-600 hover:text-blue-500">Binary Market</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Свяжитесь с нами</h3>
              <p className="text-sm text-gray-600">binaryepoch.sup@gmail.com</p>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-center text-sm text-gray-500">© 2025 Binary Epoch. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Comparisons;
