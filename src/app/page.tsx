"use client"

import { ArrowRight, Target, CheckCircle, Compass, Users, TrendingUp, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Aprenda o passo a passo simples para criar{' '}
                <span className="text-[#FFD700]">tráfego pago</span>{' '}
                que gera resultados
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
                Mesmo que você nunca tenha investido em anúncios antes
              </p>
              <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold text-lg px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/50 flex items-center gap-3 mx-auto lg:mx-0">
                Quero começar agora
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="Laptop com gráficos de sucesso"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Elementos de lifestyle flutuantes */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <span className="text-2xl">💰</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nosso método?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos uma metodologia única que já transformou centenas de negócios
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resultados Rápidos</h3>
              <p className="text-gray-600">Veja os primeiros resultados em até 7 dias após implementar</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Método Validado</h3>
              <p className="text-gray-600">Testado e aprovado por mais de 500 empreendedores</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Compass className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simples e Direto</h3>
              <p className="text-gray-600">Sem enrolação, apenas o que realmente funciona</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suporte Total</h3>
              <p className="text-gray-600">Comunidade exclusiva e mentoria direta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resultados que falam por si só
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos alunos estão conquistando
            </p>
          </div>
          
          {/* Números de Resultados */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">500+</div>
              <div className="text-xl text-gray-700">Alunos transformados</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">R$ 2M+</div>
              <div className="text-xl text-gray-700">Em vendas geradas</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">98%</div>
              <div className="text-xl text-gray-700">Taxa de satisfação</div>
            </div>
          </div>

          {/* Depoimentos com Imagens Reais */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Em 30 dias consegui meu primeiro resultado de R$ 10.000 em vendas. O método é realmente simples e eficaz!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/cedefa88-49e1-433f-b3ad-2adb94a0a6c4.jpg" 
                  alt="Diego Rodrigues" 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#FFD700]"
                />
                <div>
                  <div className="font-semibold text-gray-900">Diego Rodrigues</div>
                  <div className="text-sm text-gray-600">Consultora Digital</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Nunca tinha investido em anúncios e consegui escalar meu negócio para 6 dígitos em 6 meses!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/86d833f6-29f3-4c54-95ce-dd7392c32380.jpg" 
                  alt="João Santos" 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#FFD700]"
                />
                <div>
                  <div className="font-semibold text-gray-900">João Santos</div>
                  <div className="text-sm text-gray-600">E-commerce</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "O suporte é incrível e a metodologia funciona mesmo. Recomendo para qualquer empreendedor!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f9f94157-e164-4b13-9ea1-29c7da461596.jpg" 
                  alt="Ana Costa" 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#FFD700]"
                />
                <div>
                  <div className="font-semibold text-gray-900">Ana Costa</div>
                  <div className="text-sm text-gray-600">Infoprodutora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que o aluno vai aprender */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              O que você vai aprender no treinamento
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Como criar campanhas que convertem</h3>
                  <p className="text-gray-600">Aprenda a estrutura exata para criar anúncios que geram vendas desde o primeiro dia</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Segmentação de público certeira</h3>
                  <p className="text-gray-600">Descubra como encontrar e segmentar o público ideal para seu produto ou serviço</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Otimização e escalabilidade</h3>
                  <p className="text-gray-600">Técnicas avançadas para otimizar campanhas e escalar resultados sem perder lucratividade</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Análise de métricas e ROI</h3>
                  <p className="text-gray-600">Como interpretar dados e tomar decisões baseadas em métricas que realmente importam</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Estratégias de retargeting</h3>
                  <p className="text-gray-600">Recupere visitantes e transforme interessados em compradores com técnicas comprovadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Criador */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre seu mentor
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Especialista em tráfego pago com mais de 5 anos de experiência, já gerenciei mais de 
              <span className="font-bold text-[#FFD700]"> R$ 10 milhões </span> 
              em investimento publicitário para empresas de diversos segmentos.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Minha missão é democratizar o conhecimento em tráfego pago, ensinando de forma simples 
              e prática estratégias que realmente funcionam no mercado atual.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-gray-50 px-6 py-3 rounded-full">
                <span className="text-sm font-semibold text-gray-700">+500 Alunos</span>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-full">
                <span className="text-sm font-semibold text-gray-700">+R$ 10M Gerenciados</span>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-full">
                <span className="text-sm font-semibold text-gray-700">5+ Anos Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final (CTA) */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Está pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Junte-se a centenas de empreendedores que já descobriram o poder do tráfego pago 
            para escalar seus resultados de forma consistente e previsível.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Método Comprovado</h3>
              <p className="text-gray-300">Estratégias testadas e validadas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Suporte Completo</h3>
              <p className="text-gray-300">Comunidade e mentoria exclusiva</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Resultados Garantidos</h3>
              <p className="text-gray-300">Ou seu dinheiro de volta</p>
            </div>
          </div>

          {/* Espaço reservado para checkout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Área de Checkout</h3>
            <p className="text-gray-300 mb-6">Integração com plataforma de pagamento será adicionada aqui</p>
            <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Formulário de Pagamento</span>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold text-xl px-16 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/50 flex items-center gap-4 mx-auto">
            Garantir minha vaga agora
            <ArrowRight className="w-8 h-8" />
          </button>
          
          <p className="text-sm text-gray-400 mt-6">
            🔒 Compra 100% segura • Garantia de 7 dias • Suporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Tráfego Pago Mastery. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}