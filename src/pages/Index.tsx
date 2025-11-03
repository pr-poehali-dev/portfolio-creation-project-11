import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Дизайн интерьера',
      category: 'Интерьер',
      image: 'https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/66d47062-6d8c-4ddb-834c-857d026bbf05.jpg',
      description: 'Современный интерьер с элементами минимализма'
    },
    {
      id: 2,
      title: 'Графический дизайн',
      category: 'Реклама',
      image: 'https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/40e9ff62-6136-4bb5-b227-1e273cd587e4.jpg',
      description: 'Креативная концепция для рекламной кампании'
    },
    {
      id: 3,
      title: 'Оформление бизнес-пространства',
      category: 'Недвижимость',
      image: 'https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/fea25c5c-7a9c-41ba-886b-3afb4bd48bf3.jpg',
      description: 'Комплексное оформление офисного пространства'
    }
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Графический дизайн',
      description: 'Создание уникальных визуальных решений для вашего бренда',
      features: ['Логотипы', 'Фирменный стиль', 'Упаковка', 'Полиграфия']
    },
    {
      icon: 'Brush',
      title: 'Иллюстрация',
      description: 'Авторские иллюстрации для любых целей и форматов',
      features: ['Персонажи', 'Концепт-арт', 'Книжная иллюстрация', 'Digital art']
    },
    {
      icon: 'Home',
      title: 'Интерьер',
      description: 'Дизайн интерьеров жилых и коммерческих помещений',
      features: ['3D-визуализация', 'Планировка', 'Подбор материалов', 'Декор']
    },
    {
      icon: 'Store',
      title: 'Оформление бизнеса',
      description: 'Профессиональное оформление коммерческой недвижимости',
      features: ['Офисы', 'Магазины', 'Кафе и рестораны', 'Шоу-румы']
    },
    {
      icon: 'Image',
      title: 'Ретушь фото',
      description: 'Профессиональная обработка и ретушь изображений',
      features: ['Цветокоррекция', 'Удаление дефектов', 'Композитинг', 'Реставрация']
    },
    {
      icon: 'Megaphone',
      title: 'Разработка рекламы',
      description: 'Креативные концепции для рекламных кампаний',
      features: ['Баннеры', 'Билборды', 'Социальные сети', 'Видеореклама']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Знакомство',
      description: 'Обсуждаем вашу задачу, цели и пожелания. Определяем бюджет и сроки.'
    },
    {
      number: '02',
      title: 'Концепция',
      description: 'Разрабатываем несколько концептуальных решений на выбор.'
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создаём финальный дизайн с учётом ваших правок и комментариев.'
    },
    {
      number: '04',
      title: 'Сдача проекта',
      description: 'Передаём все файлы в нужных форматах и оказываем поддержку.'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Владелец кафе',
      text: 'Студия "Свой Стиль" полностью преобразила наше кафе! Гости в восторге от нового интерьера.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Директор компании',
      text: 'Профессиональный подход, креативные решения и точное соблюдение сроков. Рекомендую!',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      role: 'Предприниматель',
      text: 'Отличная работа с логотипом и фирменным стилем. Команда понимает запрос с полуслова.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Тренды графического дизайна 2024',
      excerpt: 'Какие стили и приёмы будут актуальны в новом году',
      date: '15 октября 2024',
      image: 'https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/40e9ff62-6136-4bb5-b227-1e273cd587e4.jpg'
    },
    {
      id: 2,
      title: 'Как выбрать цветовую палитру для бренда',
      excerpt: 'Психология цвета и практические советы по подбору оттенков',
      date: '8 октября 2024',
      image: 'https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/fea25c5c-7a9c-41ba-886b-3afb4bd48bf3.jpg'
    },
    {
      id: 3,
      title: 'Минимализм в интерьере',
      excerpt: 'Почему меньше — это больше, и как создать стильный минималистичный интерьер',
      date: '1 октября 2024',
      image: 'https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/66d47062-6d8c-4ddb-834c-857d026bbf05.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Свой Стиль
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                О студии
              </button>
              <button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">
                Процесс
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('blog')} className="hover:text-primary transition-colors">
                Блог
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Контакты
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(155,135,245,0.1),transparent_50%)] -z-10" />
        
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Дизайн-студия полного цикла
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создаём{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  стиль
                </span>{' '}
                вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground">
                Графический дизайн, иллюстрация, интерьер и оформление коммерческой недвижимости
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Смотреть портфолио
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Связаться с нами
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <div className="text-3xl font-bold text-primary">8 лет</div>
                  <div className="text-sm text-muted-foreground">Опыта</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/fea25c5c-7a9c-41ba-886b-3afb4bd48bf3.jpg"
                alt="Дизайн студия"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — это уникальное решение, созданное с вниманием к деталям
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="interior">Интерьер</TabsTrigger>
              <TabsTrigger value="branding">Реклама</TabsTrigger>
              <TabsTrigger value="business">Бизнес</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Badge className="mb-2 bg-primary/90">{item.category}</Badge>
                        <h3 className="text-white font-semibold text-xl">{item.title}</h3>
                        <p className="text-white/80 text-sm mt-2">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interior">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={portfolioItems[0].image}
                      alt={portfolioItems[0].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="branding">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={portfolioItems[1].image}
                      alt={portfolioItems[1].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={portfolioItems[2].image}
                      alt={portfolioItems[2].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Что мы делаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по дизайну и оформлению
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">О студии</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Мы создаём визуальную идентичность вашего бренда
              </h2>
              <p className="text-lg text-muted-foreground">
                Дизайн-студия "Свой Стиль" — это команда профессионалов с 8-летним опытом в области графического дизайна, иллюстрации и оформления пространств.
              </p>
              <p className="text-lg text-muted-foreground">
                Мы специализируемся на создании уникальных визуальных решений для бизнеса: от логотипов и фирменного стиля до комплексного оформления коммерческих объектов недвижимости.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon name="Award" size={24} />
                    <span className="font-semibold">Качество</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Высокие стандарты в каждом проекте</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon name="Users" size={24} />
                    <span className="font-semibold">Команда</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Опытные профессионалы своего дела</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon name="Zap" size={24} />
                    <span className="font-semibold">Скорость</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Соблюдаем сроки и дедлайны</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon name="Heart" size={24} />
                    <span className="font-semibold">Подход</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Индивидуальное решение для каждого</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-20 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/b8f0917c-2b7a-413d-a2fc-a4dca9d9e6e3/files/66d47062-6d8c-4ddb-834c-857d026bbf05.jpg"
                alt="О студии"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Процесс работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс от идеи до реализации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-2 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={24} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют и рекомендуют
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-lg">{testimonial.text}</p>
                  <Separator />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Блог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делимся опытом и знаниями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы обсудить ваш проект
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Телефон</div>
                        <a href="tel:89922140071" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                          8-992-214-00-71
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <a href="mailto:Robe25@yandex.ru" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                          Robe25@yandex.ru
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Время работы</div>
                        <div className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: По договорённости
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
                      <h3 className="text-2xl font-bold mb-4">Получить консультацию</h3>
                      <p className="text-muted-foreground mb-6">
                        Оставьте заявку, и мы свяжемся с вами в течение часа
                      </p>
                      <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Palette" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">Свой Стиль</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Дизайн-студия полного цикла. Создаём стиль вашего бизнеса.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Графический дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Иллюстрация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интерьер</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оформление бизнеса</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О студии</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>8-992-214-00-71</li>
                <li>Robe25@yandex.ru</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 Свой Стиль. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
