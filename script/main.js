document.addEventListener('DOMContentLoaded', function() {
    // Elementos do botão de idioma
    const languageBtn = document.getElementById('googleTranslateBtn');
    const currentLanguage = document.getElementById('currentLanguage');
    
    // Verifica idioma salvo ou padrão (pt)
    let lang = localStorage.getItem('language') || 'pt';
    updateLanguage(lang);
    
    // Evento de clique no botão
    languageBtn.addEventListener('click', function() {
        lang = lang === 'pt' ? 'en' : 'pt';
        localStorage.setItem('language', lang);
        updateLanguage(lang);
    });
    
    // Atualiza a exibição do idioma
    function updateLanguage(lang) {
        currentLanguage.textContent = lang === 'pt' ? 'Português' : 'English';
        translatePage(lang);
    }
    
    // Traduz o conteúdo da página
    function translatePage(lang) {
        const translations = {
            //Copyright
            'copyrightID': { pt: '© 2025 João Victor Rondon. Todos os direitos reservados.', en: '© 2025 João Victor Rondon. All rights reserved.' },

            // Navbar
            'nav-about': { pt: 'Sobre', en: 'About' },
            'nav-tech': { pt: 'Tecnologias', en: 'Technologies' },
            'nav-projects': { pt: 'Projetos', en: 'Projects' },
            'nav-contact': { pt: 'Contato', en: 'Contact' },
            
            
            // Hero Section
            'hero-title': { pt: 'João Victor', en: 'João Victor' },
            'hero-subtitle': { 
                pt: 'Programador e Professor de Robótica', 
                en: 'Programming and Robotics Teacher' 
            },
            'hero-description': {
                pt: 'Especializado em desenvolvimento web e criação de jogos, com experiência em ensino de programação. Apaixonado por resolver problemas através de tecnologia.',
                en: 'Specialized in web development and game creation, with experience in programming education. Passionate about solving problems through technology.'
            },
            
            // Sobre.html

            'journey': { pt: 'MINHA JORNADA', en: 'MY JOURNEY' },

            'about-age': { pt: 'Idade', en: 'Age' },
            'about-ageText': { pt: 'anos', en: 'year' },

            'about-location': { pt: 'Localização', en: 'Location' },

            'about-exp': { pt: 'Experiência', en: 'Experience' },

            'about-desc1' : {pt: "Atuo como professor de programação e robótica, além de ministrar aulas particulares de inglês e tecnologia", en: "Experience in both public institutions and the private sector, I always strive to combine practical knowledge and teaching in the field of technology."},
            'about-desc2' : {pt: "Ainda cursando engenharia de software, possuindo conhecimento em desenvolvimento web, consultas SQL e criação de jogos", en: "Currently pursuing a degree in Software Engineering, with knowledge in web development, SQL queries, and game creation."},
            'about-desc3' : {pt: "Com experiência em órgãos públicos e no setor privado, busco sempre unir prática e didática na área de tecnologia", en: "Experience in both public institutions and the private sector, I always strive to combine practical knowledge and teaching in the field of technology."},
            
            'about-role': { pt: 'Desenvolvedor & Professor', en: 'Developer & Tutor' },
            
            // Seções
            'section-tech': { pt: 'Tecnologias', en: 'Technologies' },
            'section-exp': { pt: 'Experiência Profissional', en: 'Professional Experience' },
            
            //Título
            'title-desc1': { pt: 'Professor de Programação e Robótica', en: 'Programming and Robotics Tutor' },
            'title-desc2': { pt: 'Operador de GED', en: 'GED operator' },
            'title-desc3': { pt: 'Estagiário', en: 'Technologies' },
            
            //Data
             'dateID1': { pt: 'Mai 2024 - Atual', en: 'May 2024 - Current' },
             'dateID2': { pt: 'Mai 2023 - Abr 2024 · 1 ano', en: 'May 2023 - Apr 2024 · 1 year' },
             'dateID3': { pt: 'Abr 2022 - Jan 2023', en: 'Apr 2022 - Jan 2023' },

            // Experiências Profissionais
            'exp-desc-1': {
                pt: `Ministrar aulas de programação e robótica para estudantes de diversas idades<br>- Ensino de robótica com Arduino e Microbit<br>- Desenvolvimento de jogos em plataformas onlines e aplicativos<br>- Ensino de programação por meio de plataformas educacionais`,
                en: `Teaching programming and robotics to students of various ages<br>- Robotics instruction with Arduino and Microbit<br>- Game development on online platforms and apps<br>- Programming teaching through educational platforms`
            },
            'exp-desc-2': {
                pt: `Acompanhamento da organização empresarial e funcionamento interno de empresas de tecnologia<br>- Entendimento da importância de metas contratuais e seu impacto nos resultados<br>- Observação de práticas de gestão de pessoas e liderança de equipes<br>- Aprendizado sobre o relacionamento entre empresas de tecnologia e seus clientes`,
                en: `Monitoring business organization and internal operations of technology companies<br>- Understanding the importance of contractual goals and their impact on results<br>- Observation of people management practices and team leadership<br>- Learning about the relationship between technology companies and their clients`
            },
            'exp-desc-3': {
                pt: `- Alterações frontend<br>- Acompanhamento no desenvolvimento backend<br>- Acompanhamento em consultas SQL`,
                en: `- Frontend modifications<br>- Backend development support<br>- SQL query monitoring`,
            }
            
            
        };
        
        // Aplica as traduções
        for (const [id, texts] of Object.entries(translations)) {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = texts[lang]; // Usa innerHTML para manter <br>
            }
        }
    }
    
    // Sincroniza entre abas
    window.addEventListener('storage', function(e) {
        if (e.key === 'language') {
            updateLanguage(e.newValue);
        }
    });
    
    // Sistema de Scroll
    const progressCircle = document.querySelector('.progress-ring-circle');
    if (progressCircle) {
        const backToTop = document.querySelector('.scroll-progress-circle');
        const circumference = 2 * Math.PI * 25;
        
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
        
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = circumference - (winScroll / height) * circumference;
            
            progressCircle.style.strokeDashoffset = progress;
            
            if (winScroll > height * 0.95) {
                backToTop.classList.add('scroll-complete');
            } else {
                backToTop.classList.remove('scroll-complete');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Efeito nas redes sociais
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        const socialLinks = document.querySelectorAll('.floating-social a');
        
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            socialLinks.forEach(link => {
                link.style.animation = 'none';
                void link.offsetHeight;
                link.style.animation = null;
                link.classList.add('highlight-animation');
                
                link.addEventListener('animationend', () => {
                    link.classList.remove('highlight-animation');
                }, { once: true });
            });
        });
    }
});