
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Comparisons = () => {
  const chartData = [
    { name: 'Single', i9: 800, r9: 750 },
    { name: 'Multi', i9: 1200, r9: 1250 },
    { name: 'Gaming', i9: 950, r9: 850 },
    { name: 'Render', i9: 1100, r9: 1150 },
  ];

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

        <h2 className="text-2xl font-semibold mb-6">Быстрый доступ</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Card className="p-6 bg-white shadow-sm rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="2" x2="9" y2="4"></line>
                <line x1="15" y1="2" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="22"></line>
                <line x1="15" y1="20" x2="15" y2="22"></line>
                <line x1="20" y1="9" x2="22" y2="9"></line>
                <line x1="20" y1="14" x2="22" y2="14"></line>
                <line x1="2" y1="9" x2="4" y2="9"></line>
                <line x1="2" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <h3 className="font-medium mb-2">Процессоры</h3>
            <p className="text-sm text-gray-500 mb-4">Каталог процессоров от разных производителей</p>
            <Button variant="outline" className="w-full">Перейти</Button>
          </Card>
          
          <Card className="p-6 bg-white shadow-sm rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h3 className="font-medium mb-2">Сравнения</h3>
            <p className="text-sm text-gray-500 mb-4">Результаты тестов конкретных процессоров</p>
            <Button variant="outline" className="w-full">Перейти</Button>
          </Card>
          
          <Card className="p-6 bg-white shadow-sm rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <h3 className="font-medium mb-2">Новости</h3>
            <p className="text-sm text-gray-500 mb-4">Новейшие релизы процессоров и технологий</p>
            <Button variant="outline" className="w-full">Перейти</Button>
          </Card>
          
          <Card className="p-6 bg-white shadow-sm rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="font-medium mb-2">Binary Market</h3>
            <p className="text-sm text-gray-500 mb-4">Платформа для покупки и продажи процессоров</p>
            <Button variant="outline" className="w-full">Перейти</Button>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Грядущие флагманы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-100 mb-4 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Intel CPU" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Intel Core i9-15900K</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Ядра</span>
                <span className="font-medium">24 (8P + 16E)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Потоки</span>
                <span className="font-medium">32</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Базовая частота</span>
                <span className="font-medium">3.6 ГГц</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Турбо частота</span>
                <span className="font-medium">6.2 ГГц</span>
              </div>
            </div>
            <Button className="w-full">Подробнее</Button>
          </Card>

          <Card className="p-6 bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-100 mb-4 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1555618254-5a897763f8c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="AMD CPU" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">AMD Ryzen 9 9950X</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Ядра</span>
                <span className="font-medium">16</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Потоки</span>
                <span className="font-medium">32</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Базовая частота</span>
                <span className="font-medium">4.5 ГГц</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Турбо частота</span>
                <span className="font-medium">5.9 ГГц</span>
              </div>
            </div>
            <Button className="w-full">Подробнее</Button>
          </Card>

          <Card className="p-6 bg-white shadow-sm rounded-lg">
            <h3 className="text-xl font-medium mb-4">Сравнение характеристик</h3>
            <div className="h-[200px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="i9" stroke="#0ea5e9" strokeWidth={2} />
                  <Line type="monotone" dataKey="r9" stroke="#d946ef" strokeWidth={2} />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Intel Core i9-15900K</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                <span className="text-sm">AMD Ryzen 9 9950X</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">Подробное сравнение</Button>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Популярные сравнения</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { title: "Intel vs AMD", desc: "Сравнение семейств процессоров двух гигантов индустрии" },
            { title: "Игровые vs Рабочие станции", desc: "Что выбрать для разных сценариев использования" },
            { title: "Цена vs Производительность", desc: "Как выбрать лучший процессор по соотношению цена/качество" }
          ].map((item, index) => (
            <Card key={index} className="p-4 bg-white shadow-sm rounded-lg">
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
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
