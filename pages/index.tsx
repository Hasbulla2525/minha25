import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>منجة الخير 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-auto bg-no-repeat bg-center " style={{}}>
        <main className="w-full  mt-20 px-6">
          <div className="py-3 flex justify-center">
            <img src="flag.gif" className="h-40 justify-center" alt="" />
          </div>
          <div className="w-full pt-4 pb-8 text-center  z-10 mt-4">
            <h1 className="text-5xl mb-2">منحة الخير 2023</h1>
            <p className="text-xl my-4">👇👇 خطوات الحصول على المنحة 👇👇</p>
            <p className="text-xl my-4"> ا✅ أضغط علي التسجيل </p>
            <h6 className="text-xl my-4">
              ا✅ بعد ان تضغط علي الزر سيفتح معك الموقع المخصص للمنحة. ستجد
              مستطيل في الصفحة أكتب به رقم هاتفك و أضغط ارسال. ستتلقي رسالة بها
              كود اكتبه في المستطيل وأضغط تأكيد
            </h6>
            <h6 className="text-xl my-4">
              ا✅ سوف يتم التواصل علي رقم هاتفك الذي سجلته ليتم التنسيق عن
              الطريقة التي ستستلم االمنحة بها
            </h6>
            <div className="  mt-12">
              <a
                href="/"
                className="bg-green-600  hover:bg-green-500 duration-150 ease-in-out text-white px-20  text-2xl py-6 rounded-lg font-bold"
              >
                سجل الآن
              </a>
            </div>
          </div>

          <div></div>
        </main>
      </div>
    </>
  );
}
