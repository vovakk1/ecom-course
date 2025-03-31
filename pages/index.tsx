import Head from 'next/head'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Head>
        <title>Ecom 360</title>
      </Head>
      <h1 className="text-4xl font-bold text-center">Ecom 360: Деньги из интернета с нуля</h1>
      <p className="text-center text-lg text-gray-600">
        Универсальный курс по e-commerce: модули, бонусы, реальный опыт.
      </p>
    </div>
  )
}
