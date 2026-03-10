// Scroll reveal animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Trigger once on load
window.addEventListener("load", reveal);
// Trigger on scroll
window.addEventListener("scroll", reveal);

// Header Scroll Effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Update Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();

// Translation Data
const translations = {
    en: {
        nav_about: "About Us",
        nav_products: "Products",
        nav_recipes: "Recipes",
        nav_quality: "Quality",
        nav_contact: "Contact",
        hero_title: "RoyaAfrica – Premium Tunisian Products for the World",
        hero_subtitle: "Exporting excellence, from our Mediterranean shores to your table.",
        btn_discover: "Discover Our Products",
        about_title: "Tunisian Heritage & Expertise",
        about_p1: "RoyaAfrica is an international trading company specializing in the export and import of high-quality Tunisian food products. We bridge the gap between traditional Mediterranean agriculture and global markets.",
        about_p2: "With a deep respect for our heritage, we ensure that every product leaving our shores meets the highest standards of international export quality. Our global reach allows us to deliver excellence worldwide.",
        products_title: "Our Premium Selection",
        products_subtitle: "Sourced from the finest producers in Tunisia",
        badge_premium: "Premium",
        prod_oil_title: "Extra Virgin Olive Oil",
        prod_oil_desc: "Cold-pressed from the finest Mediterranean olives, offering a rich and authentic flavor.",
        badge_export: "Export Quality",
        prod_dates_title: "Deglet Nour Dates",
        prod_dates_desc: "The 'Queen of Dates', known for their translucent golden color and soft, honey-like taste.",
        badge_fresh: "Fresh & Frozen",
        prod_fish_title: "Mediterranean Seafood",
        prod_fish_desc: "High-quality fresh and frozen fish, responsibly sourced from deep blue Mediterranean waters.",
        badge_organic: "100% Organic",
        prod_tomatoes_title: "Sun-dried Tomatoes",
        prod_tomatoes_desc: "Premium organic sun-dried tomatoes, bursting with intense flavor and Mediterranean sunshine.",
        recipes_title: "Culinary Inspirations",
        recipes_subtitle: "Discover authentic Mediterranean recipes using our premium ingredients",
        badge_recipe: "Recipe Idea",
        rec_dates_title: "Almond Stuffed Dates",
        rec_dates_desc: "A luxurious appetizer or dessert. Premium Deglet Nour dates stuffed with roasted almonds and drizzled with honey.",
        rec_oil_title: "Mediterranean Fresh Salad",
        rec_oil_desc: "Crisp vegetables and feta cheese elevated by a generous drizzle of our Extra Virgin Olive Oil.",
        rec_tuna_title: "Authentic Tunisian Salad",
        rec_tuna_desc: "A vibrant mix of fresh ingredients topped with premium chunks of our delicious Mediterranean tuna.",
        awards_title: "The Global Prestige of Tunisian Olive Oil",
        awards_desc: "Tunisian olive oil has taken the world by storm, recognized globally for its unmatched quality, rich flavor, and immense health benefits.",
        stat_awards_title: "International Awards",
        stat_awards_desc: "Consistently winning hundreds of gold medals at the most prestigious global competitions.",
        stat_prod_title: "Global Producer",
        stat_prod_desc: "Tunisia stands proudly among the top producers and exporters of olive oil worldwide.",
        stat_health_title: "Health & Purity",
        stat_health_desc: "Exceptional levels of polyphenols and antioxidants, nurtured under the Mediterranean sun.",
        quality_title: "Uncompromising Quality",
        quality_desc: "At RoyaAfrica, quality is our signature. From harvesting to packaging, we adhere to strict international certifications and standards, ensuring that our partners receive only the absolute best of Tunisia.",
        contact_title: "Get In Touch",
        contact_desc: "Ready to partner with us for premium Tunisian exports? Reach out to our team today.",
        form_name: "Your Name",
        form_email: "Your Email",
        form_message: "Your Message",
        btn_send: "Send Message",
        footer_rights: "All rights reserved."
    },
    fr: {
        nav_about: "À Propos",
        nav_products: "Produits",
        nav_recipes: "Recettes",
        nav_quality: "Qualité",
        nav_contact: "Contact",
        hero_title: "RoyaAfrica – Produits Tunisiens Premium pour le Monde",
        hero_subtitle: "L'excellence à l'export, de nos côtes méditerranéennes à votre table.",
        btn_discover: "Découvrir Nos Produits",
        about_title: "Héritage Tunisien & Expertise",
        about_p1: "RoyaAfrica est une société de commerce international spécialisée dans l'exportation et l'importation de produits agroalimentaires tunisiens de haute qualité. Nous faisons le pont entre l'agriculture méditerranéenne traditionnelle et les marchés mondiaux.",
        about_p2: "Avec un profond respect pour notre héritage, nous veillons à ce que chaque produit quittant nos côtes réponde aux normes internationales d'exportation les plus strictes. Notre envergure mondiale nous permet de livrer l'excellence partout.",
        products_title: "Notre Sélection Premium",
        products_subtitle: "Provenant des meilleurs producteurs de Tunisie",
        badge_premium: "Premium",
        prod_oil_title: "Huile d'Olive Extra Vierge",
        prod_oil_desc: "Pressée à froid à partir des meilleures olives méditerranéennes, offrant une saveur riche et authentique.",
        badge_export: "Qualité Export",
        prod_dates_title: "Dattes Deglet Nour",
        prod_dates_desc: "La 'Reine des Dattes', connue pour sa couleur dorée translucide et son goût doux et mielleux.",
        badge_fresh: "Frais & Surgelé",
        prod_fish_title: "Fruits de Mer Méditerranéens",
        prod_fish_desc: "Poissons frais et surgelés de haute qualité, pêchés de manière responsable dans les eaux bleues profondes de la Méditerranée.",
        badge_organic: "100% Bio",
        prod_tomatoes_title: "Tomates Séchées",
        prod_tomatoes_desc: "Tomates séchées bio de première qualité, gorgées de saveurs intenses et du soleil méditerranéen.",
        recipes_title: "Inspirations Culinaires",
        recipes_subtitle: "Découvrez des recettes méditerranéennes authentiques avec nos ingrédients premium",
        badge_recipe: "Idée Recette",
        rec_dates_title: "Dattes Farcies aux Amandes",
        rec_dates_desc: "Une entrée ou dessert luxueux. Dattes Deglet Nour farcies aux amandes grillées et nappées de miel.",
        rec_oil_title: "Salade Méditerranéenne",
        rec_oil_desc: "Légumes croquants et feta rehaussés par un généreux filet de notre huile d'olive extra vierge.",
        rec_tuna_title: "Salade Tunisienne Authentique",
        rec_tuna_desc: "Un mélange vibrant d'ingrédients frais surmonté de généreux morceaux de notre délicieux thon.",
        awards_title: "Le Prestige Mondial de l'Huile d'Olive Tunisienne",
        awards_desc: "L'huile d'olive tunisienne a conquis le monde, reconnue mondialement pour sa qualité inégalée, sa saveur riche et ses immenses bienfaits pour la santé.",
        stat_awards_title: "Prix Internationaux",
        stat_awards_desc: "Remportant régulièrement des centaines de médailles d'or lors des concours mondiaux les plus prestigieux.",
        stat_prod_title: "Producteur Mondial",
        stat_prod_desc: "La Tunisie figure fièrement parmi les premiers producteurs et exportateurs mondiaux d'huile d'olive.",
        stat_health_title: "Santé & Pureté",
        stat_health_desc: "Des niveaux exceptionnels de polyphénols et d'antioxydants, cultivés sous le soleil méditerranéen.",
        quality_title: "Une Qualité Sans Compromis",
        quality_desc: "Chez RoyaAfrica, la qualité est notre signature. De la récolte à l'emballage, nous adhérons à des certifications et normes internationales strictes, garantissant que nos partenaires ne reçoivent que la quintessence de la Tunisie.",
        contact_title: "Contactez-Nous",
        contact_desc: "Prêt à devenir partenaire pour des exportations tunisiennes premium ? Contactez notre équipe dès aujourd'hui.",
        form_name: "Votre Nom",
        form_email: "Votre Email",
        form_message: "Votre Message",
        btn_send: "Envoyer le Message",
        footer_rights: "Tous droits réservés."
    },
    es: {
        nav_about: "Sobre Nosotros",
        nav_products: "Productos",
        nav_recipes: "Recetas",
        nav_quality: "Calidad",
        nav_contact: "Contacto",
        hero_title: "RoyaAfrica – Productos Tunecinos Premium para el Mundo",
        hero_subtitle: "Exportando excelencia, desde nuestras costas mediterráneas a su mesa.",
        btn_discover: "Descubra Nuestros Productos",
        about_title: "Herencia y Experiencia Tunecina",
        about_p1: "RoyaAfrica es una empresa de comercio internacional especializada en la exportación e importación de productos alimenticios tunecinos de alta calidad. Cerramos la brecha entre la agricultura mediterránea tradicional y los mercados globales.",
        about_p2: "Con un profundo respeto por nuestra herencia, aseguramos que cada producto que sale de nuestras costas cumpla con los más altos estándares internacionales de calidad de exportación. Nuestro alcance global nos permite entregar excelencia en todo el mundo.",
        products_title: "Nuestra Selección Premium",
        products_subtitle: "Procedente de los mejores productores de Túnez",
        badge_premium: "Premium",
        prod_oil_title: "Aceite de Oliva Virgen Extra",
        prod_oil_desc: "Prensado en frío de las mejores aceitunas mediterráneas, ofreciendo un sabor rico y auténtico.",
        badge_export: "Calidad de Exportación",
        prod_dates_title: "Dátiles Deglet Nour",
        prod_dates_desc: "La 'Reina de los Dátiles', conocida por su color dorado translúcido y su sabor suave y amielado.",
        badge_fresh: "Fresco y Congelado",
        prod_fish_title: "Mariscos del Mediterráneo",
        prod_fish_desc: "Pescado fresco y congelado de alta calidad, obtenido de manera responsable en las profundas aguas azules del Mediterráneo.",
        badge_organic: "100% Orgánico",
        prod_tomatoes_title: "Tomates Secos",
        prod_tomatoes_desc: "Tomates orgánicos secados al sol de primera calidad, llenos de un sabor intenso y sol mediterráneo.",
        recipes_title: "Inspiraciones Culinarias",
        recipes_subtitle: "Descubra auténticas recetas mediterráneas con nuestros ingredientes premium",
        badge_recipe: "Idea de Receta",
        rec_dates_title: "Dátiles Rellenos de Almendras",
        rec_dates_desc: "Un aperitivo o postre de lujo. Dátiles premium rellenos de almendras tostadas y cubiertos con miel.",
        rec_oil_title: "Ensalada Fresca del Mediterráneo",
        rec_oil_desc: "Verduras crujientes y queso feta realzado con un chorrito de nuestro Aceite de Oliva.",
        rec_tuna_title: "Ensalada Tunecina Auténtica",
        rec_tuna_desc: "Una mezcla de ingredientes frescos rematada con trozos premium de nuestro atún mediterráneo.",
        awards_title: "El Prestigio Mundial del Aceite de Oliva Tunecino",
        awards_desc: "El aceite de oliva tunecino ha conquistado el mundo, reconocido mundialmente por su calidad inigualable, su rico sabor y sus inmensos beneficios para la salud.",
        stat_awards_title: "Premios Internacionales",
        stat_awards_desc: "Ganando constantemente cientos de medallas de oro en las competiciones mundiales más prestigiosas.",
        stat_prod_title: "Productor Mundial",
        stat_prod_desc: "Túnez se enorgullece de estar entre los principales productores y exportadores de aceite de oliva en todo el mundo.",
        stat_health_title: "Salud y Pureza",
        stat_health_desc: "Niveles excepcionales de polifenoles y antioxidantes, cultivados bajo el sol del Mediterráneo.",
        quality_title: "Calidad Incondicional",
        quality_desc: "En RoyaAfrica, la calidad es nuestra firma. Desde la cosecha hasta el envasado, nos adherimos a estrictas certificaciones y normas internacionales, asegurando que nuestros socios reciban solo lo mejor de Túnez.",
        contact_title: "Contáctenos",
        contact_desc: "¿Listo para asociarse con nosotros para exportaciones tunecinas premium? Póngase en contacto con nuestro equipo hoy.",
        form_name: "Su Nombre",
        form_email: "Su Correo",
        form_message: "Su Mensaje",
        btn_send: "Enviar Mensaje",
        footer_rights: "Todos los derechos reservados."
    },
    ar: {
        nav_about: "من نحن",
        nav_products: "منتجاتنا",
        nav_recipes: "وصفات",
        nav_quality: "الجودة",
        nav_contact: "اتصل بنا",
        hero_title: "رؤيا أفريقيا – منتجات تونسية فاخرة للعالم",
        hero_subtitle: "نُصدّر التميز، من سواحلنا المتوسطية إلى مائدتك.",
        btn_discover: "اكتشف منتجاتنا",
        about_title: "تراث وخبرة تونسية",
        about_p1: "رؤيا أفريقيا هي شركة تجارة دولية متخصصة في تصدير واستيراد المنتجات الغذائية التونسية عالية الجودة. نحن نربط بين الزراعة المتوسطية التقليدية والأسواق العالمية.",
        about_p2: "مع احترامنا العميق لتراثنا، نضمن أن كل منتج يغادر سواحلنا يلبي أعلى المعايير الدولية لجودة التصدير. انتشارنا العالمي يتيح لنا تقديم التميز في جميع أنحاء العالم.",
        products_title: "مجموعتنا الفاخرة",
        products_subtitle: "منتقاة من أفضل المنتجين في تونس",
        badge_premium: "ممتاز",
        prod_oil_title: "زيت زيتون بكر ممتاز",
        prod_oil_desc: "معصور على البارد من أجود أنواع الزيتون المتوسطي، ويتميز بنكهة غنية وأصيلة.",
        badge_export: "جودة التصدير",
        prod_dates_title: "تمور دقلة النور",
        prod_dates_desc: "ملكة التمور، تشتهر بلونها الذهبي الشفاف ومذاقها الناعم الذي يشبه العسل.",
        badge_fresh: "طازج ومجمد",
        prod_fish_title: "مأكولات بحرية متوسطية",
        prod_fish_desc: "أسماك طازجة ومجمدة عالية الجودة، يتم الحصول عليها بمسؤولية من مياه البحر الأبيض المتوسط الزرقاء العميقة.",
        badge_organic: "بيولوجي 100%",
        prod_tomatoes_title: "طماطم مجففة",
        prod_tomatoes_desc: "طماطم بيولوجية مجففة بالشمس، فاخرة ومليئة بالنكهة القوية وشمس البحر الأبيض المتوسط.",
        recipes_title: "إلهام في الطبخ",
        recipes_subtitle: "اكتشف وصفات متوسطية أصيلة باستخدام مكوناتنا الفاخرة",
        badge_recipe: "فكرة وصفة",
        rec_dates_title: "تمر محشي باللوز",
        rec_dates_desc: "مقبلات أو حلوى فاخرة. تمور دقلة النور الفاخرة محشوة باللوز المحمص ومغطاة بالعسل.",
        rec_oil_title: "سلطة متوسطية طازجة",
        rec_oil_desc: "خضار مقرمشة وجبنة فيتا مع رشة بسخاء من زيت الزيتون البكر الممتاز.",
        rec_tuna_title: "سلطة تونسية أصيلة",
        rec_tuna_desc: "مزيج نابض بالحياة من المكونات الطازجة مغطاة بقطع فاخرة من التونة اللذيذة.",
        awards_title: "التميز العالمي لزيت الزيتون التونسي",
        awards_desc: "اكتسح زيت الزيتون التونسي العالم، حيث يُعترف به عالميًا لجودته التي لا تُضاهى، ونكهته الغنية، وفوائده الصحية الهائلة.",
        stat_awards_title: "جوائز دولية",
        stat_awards_desc: "يحصد مئات الميداليات الذهبية باستمرار في أعرق المسابقات العالمية.",
        stat_prod_title: "إنتاج عالمي",
        stat_prod_desc: "تقف تونس بكل فخر بين أكبر الدول المنتجة والمصدرة لزيت الزيتون في العالم.",
        stat_health_title: "الصحة والنقاء",
        stat_health_desc: "مستويات استثنائية من البوليفينول ومضادات الأكسدة، نضجت تحت شمس البحر الأبيض المتوسط.",
        quality_title: "جودة لا تساوم",
        quality_desc: "في رؤيا أفريقيا، الجودة هي بصمتنا. من الحصاد إلى التعبئة، نلتزم بشهادات ومعايير دولية صارمة، لضمان حصول شركائنا على أفضل ما تقدمه تونس فقط.",
        contact_title: "تواصل معنا",
        contact_desc: "هل أنت مستعد للشراكة معنا في الصادرات التونسية الفاخرة؟ تواصل مع فريقنا اليوم.",
        form_name: "الاسم",
        form_email: "البريد الإلكتروني",
        form_message: "الرسالة",
        btn_send: "إرسال الرسالة",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

// Bilingual Support Functionality
const btnEn = document.getElementById("lang-en");
const btnFr = document.getElementById("lang-fr");
const btnAr = document.getElementById("lang-ar");
const btnEs = document.getElementById("lang-es");

function setLanguage(lang) {
    // Buttons state
    const buttons = [btnEn, btnFr, btnAr, btnEs];
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (lang === 'en') btnEn.classList.add('active');
    else if (lang === 'fr') btnFr.classList.add('active');
    else if (lang === 'ar') btnAr.classList.add('active');
    else if (lang === 'es') btnEs.classList.add('active');

    // RTL and Font Handing
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        document.body.style.fontFamily = "'Cairo', sans-serif";
        const headings = document.querySelectorAll('h1, h2, h3, h4, .logo');
        headings.forEach(h => h.style.fontFamily = "'Cairo', sans-serif");
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
        document.body.style.fontFamily = "var(--font-body)";
        const headings = document.querySelectorAll('h1, h2, h3, h4');
        headings.forEach(h => h.style.fontFamily = "var(--font-heading)");
        document.querySelector('.logo').style.fontFamily = "var(--font-heading)";
    }

    // Translate standard elements
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate placeholders
    const placeholders = document.querySelectorAll("[data-i18n-ph]");
    placeholders.forEach(element => {
        const key = element.getAttribute("data-i18n-ph");
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

btnEn.addEventListener('click', () => setLanguage('en'));
btnFr.addEventListener('click', () => setLanguage('fr'));
btnAr.addEventListener('click', () => setLanguage('ar'));
btnEs.addEventListener('click', () => setLanguage('es'));
