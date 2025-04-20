$(document).ready(function() {
    // Language translations
    const translations = {
        en: {
            features: "Features",
            integrations: "Integrations",
            contact: "Contact",
            requestDemo: "Request Demo",
            heroTitle: "Supercharge 🔥 Your Real Estate CRM with AI 🤖",
            heroSubtitle: "NeoTrack helps Real Estate companies automate lead management and boost sales performance with powerful AI capabilities.",
            seeDemo: "See Demo",
            learnMore: "Learn More",
            aiPoweredFeatures: "AI-Powered Features",
            featuresSubtitle: "NeoTrack leverages cutting-edge AI to transform how real estate companies manage their customer relationships.",
            automatedLeadContact: "Automated Lead Contact",
            automatedLeadContactDesc: "Automatically contact leads and send relevant marketing materials for properties of interest. NeoTrack ensures timely follow-ups with personalized content.",
            keyBenefit: "Key benefit:",
            automatedLeadContactBenefit: "Save 15+ hours per week on manual outreach",
            smartLeadQualification: "Smart Lead Qualification",
            smartLeadQualificationDesc: "Qualify leads based on interest and engagement metrics to prioritize your sales efforts. Our AI analyzes behavior patterns to identify high-potential clients.",
            smartLeadQualificationBenefit: "Increase conversion rates by up to 35%",
            actionableReports: "Actionable Reports",
            actionableReportsDesc: "Get intelligent reports highlighting critical actions: unattended leads, missing interactions, and scheduling gaps. Never miss an opportunity again.",
            actionableReportsBenefit: "Reduce missed opportunities by 42%",
            seamlessCrmIntegration: "Seamless CRM Integration",
            integrationSubtitle: "NeoTrack works with your existing CRM system, no migration needed. Connect with your preferred platform in minutes.",
            pipedriveIntegration: "Pipedrive Integration",
            pipedriveIntegrationDesc: "Enhance your Pipedrive CRM with AI-powered lead management. Automatically track activities, qualify leads, and get actionable insights.",
            zohocrmIntegration: "ZohoCRM Integration",
            zohocrmIntegrationDesc: "Supercharge your ZohoCRM with NeoTrack's AI capabilities. Automate lead nurturing, qualification, and follow-ups with intelligent workflows.",
            salesforceIntegration: "Salesforce Integration",
            salesforceIntegrationDesc: "Extend Salesforce capabilities with NeoTrack's AI-powered real estate tools. Optimize your sales process and boost agent productivity.",
            biDirectionalSync: "Bi-directional sync",
            dealStageAutomation: "Deal stage automation",
            customFieldMapping: "Custom field mapping",
            realTimeDataSync: "Real-time data sync",
            aiPoweredLeadScoring: "AI-powered lead scoring",
            customWorkflowAutomation: "Custom workflow automation",
            nativeSalesforceIntegration: "Native Salesforce integration",
            advancedReportingDashboard: "Advanced reporting dashboard",
            enterpriseGradeSecurity: "Enterprise-grade security",
            readyToTransform: "Ready to Transform Your Real Estate CRM?",
            scheduleDemo: "Schedule a personalized demo to see how NeoTrack can boost your team's performance and drive more sales.",
            requestDemoButton: "Request a Demo",
            requestDemoForm: "Request Demo",
            fullName: "Full Name",
            workEmail: "Work Email",
            companyName: "Company Name",
            selectCrm: "Select your CRM",
            otherCrm: "Other",
            submitRequest: "Request Demo",
            privacyNotice: "By submitting this form, you agree to our",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            preferToTalk: "Prefer to talk to sales?",
            contactTeam: "Contact our team",
            allRightsReserved: "© 2025 NeoTrack. All rights reserved.",
            emailInstructions: "Click the button below to request a demo via email:",
            emailButton: "Email Us for a Demo"
        },
        es: {
            features: "Características",
            integrations: "Integraciones",
            contact: "Contacto",
            requestDemo: "Solicitar Demo",
            heroTitle: "Potencia 🔥 Tu CRM Inmobiliario con IA 🤖",
            heroSubtitle: "NeoTrack ayuda a las empresas inmobiliarias a automatizar la gestión de leads y mejorar el rendimiento de ventas con potentes capacidades de IA.",
            seeDemo: "Ver Demo",
            learnMore: "Saber Más",
            aiPoweredFeatures: "Características Impulsadas por IA",
            featuresSubtitle: "NeoTrack utiliza IA de vanguardia para transformar cómo las empresas inmobiliarias gestionan sus relaciones con clientes.",
            automatedLeadContact: "Contacto Automatizado de Leads",
            automatedLeadContactDesc: "Contacta automáticamente a los leads y envía materiales de marketing relevantes para propiedades de interés. NeoTrack asegura seguimientos oportunos con contenido personalizado.",
            keyBenefit: "Beneficio clave:",
            automatedLeadContactBenefit: "Ahorra más de 15 horas semanales en contactos manuales",
            smartLeadQualification: "Calificación Inteligente de Leads",
            smartLeadQualificationDesc: "Califica leads según métricas de interés y engagement para priorizar tus esfuerzos de venta. Nuestra IA analiza patrones de comportamiento para identificar clientes de alto potencial.",
            smartLeadQualificationBenefit: "Aumenta las tasas de conversión hasta un 35%",
            actionableReports: "Informes Accionables",
            actionableReportsDesc: "Obtén informes inteligentes destacando acciones críticas: leads desatendidos, interacciones faltantes y brechas de programación. Nunca pierdas una oportunidad de nuevo.",
            actionableReportsBenefit: "Reduce oportunidades perdidas en un 42%",
            seamlessCrmIntegration: "Integración Perfecta con CRM",
            integrationSubtitle: "NeoTrack funciona con tu sistema CRM existente, sin necesidad de migración. Conéctate con tu plataforma preferida en minutos.",
            pipedriveIntegration: "Integración con Pipedrive",
            pipedriveIntegrationDesc: "Mejora tu CRM Pipedrive con gestión de leads impulsada por IA. Rastrea automáticamente actividades, califica leads y obtén información accionable.",
            zohocrmIntegration: "Integración con ZohoCRM",
            zohocrmIntegrationDesc: "Potencia tu ZohoCRM con las capacidades de IA de NeoTrack. Automatiza la nutrición, calificación y seguimiento de leads con flujos de trabajo inteligentes.",
            salesforceIntegration: "Integración con Salesforce",
            salesforceIntegrationDesc: "Amplía las capacidades de Salesforce con las herramientas inmobiliarias impulsadas por IA de NeoTrack. Optimiza tu proceso de ventas y aumenta la productividad de los agentes.",
            biDirectionalSync: "Sincronización bidireccional",
            dealStageAutomation: "Automatización de etapas de negocio",
            customFieldMapping: "Mapeo de campos personalizados",
            realTimeDataSync: "Sincronización de datos en tiempo real",
            aiPoweredLeadScoring: "Puntuación de leads con IA",
            customWorkflowAutomation: "Automatización de flujos de trabajo personalizados",
            nativeSalesforceIntegration: "Integración nativa con Salesforce",
            advancedReportingDashboard: "Panel de informes avanzado",
            enterpriseGradeSecurity: "Seguridad de nivel empresarial",
            readyToTransform: "¿Listo para Transformar tu CRM Inmobiliario?",
            scheduleDemo: "Programa una demo personalizada para ver cómo NeoTrack puede impulsar el rendimiento de tu equipo y aumentar tus ventas.",
            requestDemoButton: "Solicitar una Demo",
            requestDemoForm: "Solicitar Demo",
            fullName: "Nombre Completo",
            workEmail: "Email de Trabajo",
            companyName: "Nombre de la Empresa",
            selectCrm: "Selecciona tu CRM",
            otherCrm: "Otro",
            submitRequest: "Solicitar Demo",
            privacyNotice: "Al enviar este formulario, aceptas nuestra",
            privacyPolicy: "Política de Privacidad",
            termsOfService: "Términos de Servicio",
            preferToTalk: "¿Prefieres hablar con ventas?",
            contactTeam: "Contacta a nuestro equipo",
            allRightsReserved: "© 2025 NeoTrack. Todos los derechos reservados.",
            emailInstructions: "Haz clic en el botón para solicitar una demo por correo electrónico:",
            emailButton: "Envíanos un Email para una Demo"
        }
    };
    
    // Default language (fallback)
    let currentLang = "en";
    
    // Check if user has a saved language preference
    const savedLang = localStorage.getItem('neotrack-language');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // Function to update all text elements with translations
    function updatePageLanguage() {
        // Update elements with data-lang-key attribute
        $("[data-lang-key]").each(function() {
            const key = $(this).data("lang-key");
            if (translations[currentLang][key]) {
                $(this).text(translations[currentLang][key]);
            }
        });
        
        // Update specific elements that don't have data-lang-key
        // Hero section
        $("#hero h1").text(translations[currentLang].heroTitle);
        $("#hero .lead").text(translations[currentLang].heroSubtitle);
        $("#hero .btn-primary").text(translations[currentLang].seeDemo);
        $("#hero .btn-outline-primary").text(translations[currentLang].learnMore);
        
        // Features section
        $("#features .section-header h2").text(translations[currentLang].aiPoweredFeatures);
        $("#features .section-header .lead").text(translations[currentLang].featuresSubtitle);
        
        const featureCards = $("#features .feature-card");
        $(featureCards[0]).find('h3').text(translations[currentLang].automatedLeadContact);
        $(featureCards[0]).find('p').text(translations[currentLang].automatedLeadContactDesc);
        $(featureCards[0]).find('.feature-benefit strong').text(translations[currentLang].keyBenefit);
        $(featureCards[0]).find('.feature-benefit').contents().last().replaceWith(" " + translations[currentLang].automatedLeadContactBenefit);
        
        $(featureCards[1]).find('h3').text(translations[currentLang].smartLeadQualification);
        $(featureCards[1]).find('p').text(translations[currentLang].smartLeadQualificationDesc);
        $(featureCards[1]).find('.feature-benefit strong').text(translations[currentLang].keyBenefit);
        $(featureCards[1]).find('.feature-benefit').contents().last().replaceWith(" " + translations[currentLang].smartLeadQualificationBenefit);
        
        $(featureCards[2]).find('h3').text(translations[currentLang].actionableReports);
        $(featureCards[2]).find('p').text(translations[currentLang].actionableReportsDesc);
        $(featureCards[2]).find('.feature-benefit strong').text(translations[currentLang].keyBenefit);
        $(featureCards[2]).find('.feature-benefit').contents().last().replaceWith(" " + translations[currentLang].actionableReportsBenefit);
        
        // Integrations section
        $("#integrations .section-header h2").text(translations[currentLang].seamlessCrmIntegration);
        $("#integrations .section-header .lead").text(translations[currentLang].integrationSubtitle);
        
        const integrationCards = $("#integrations .integration-card");
        $(integrationCards[0]).find('h3').text(translations[currentLang].pipedriveIntegration);
        $(integrationCards[0]).find('p').text(translations[currentLang].pipedriveIntegrationDesc);
        
        $(integrationCards[1]).find('h3').text(translations[currentLang].zohocrmIntegration);
        $(integrationCards[1]).find('p').text(translations[currentLang].zohocrmIntegrationDesc);
        
        $(integrationCards[2]).find('h3').text(translations[currentLang].salesforceIntegration);
        $(integrationCards[2]).find('p').text(translations[currentLang].salesforceIntegrationDesc);
        
        // Update integration features lists
        $("#integrations .integration-features li").each(function(index) {
            let featureKey = '';
            if (index % 3 === 0) featureKey = 'biDirectionalSync';
            else if (index % 3 === 1) featureKey = 'dealStageAutomation';
            else featureKey = 'customFieldMapping';
            
            if ($(this).parent().parent().index() === 1) {
                if (index % 3 === 0) featureKey = 'realTimeDataSync';
                else if (index % 3 === 1) featureKey = 'aiPoweredLeadScoring';
                else featureKey = 'customWorkflowAutomation';
            }
            
            if ($(this).parent().parent().index() === 2) {
                if (index % 3 === 0) featureKey = 'nativeSalesforceIntegration';
                else if (index % 3 === 1) featureKey = 'advancedReportingDashboard';
                else featureKey = 'enterpriseGradeSecurity';
            }
            
            $(this).contents().last().replaceWith(" " + translations[currentLang][featureKey]);
        });
        
        // CTA Section
        $("#cta h2").text(translations[currentLang].readyToTransform);
        $("#cta .lead").text(translations[currentLang].scheduleDemo);
        $("#cta .btn").text(translations[currentLang].requestDemoButton);
        
        // Demo request form
        $("#request-demo h2").text(translations[currentLang].requestDemoForm);
        $("#fullName").attr("placeholder", translations[currentLang].fullName);
        $("#workEmail").attr("placeholder", translations[currentLang].workEmail);
        $("#companyName").attr("placeholder", translations[currentLang].companyName);
        $("#currentCrm option[disabled]").text(translations[currentLang].selectCrm);
        $("#currentCrm option[value='other']").text(translations[currentLang].otherCrm);
        $("#demo-form button[type='submit']").text(translations[currentLang].submitRequest);
        
        // Privacy message
        const privacyText = $("#demo-form p.small");
        privacyText.contents().first().replaceWith(translations[currentLang].privacyNotice + " ");
        privacyText.find("a").first().text(translations[currentLang].privacyPolicy);
        privacyText.find("a").last().text(translations[currentLang].termsOfService);
        
        // Prefer to talk text
        const preferText = $("#demo-form").next().find("p");
        preferText.contents().first().replaceWith(translations[currentLang].preferToTalk + " ");
        preferText.find("a").text(translations[currentLang].contactTeam);
        
        // Footer
        $(".footer p").text(translations[currentLang].allRightsReserved);
        $(".footer a:contains('Privacy Policy')").text(translations[currentLang].privacyPolicy);
        $(".footer a:contains('Terms of Service')").text(translations[currentLang].termsOfService);
        $(".footer a:contains('Contact')").text(translations[currentLang].contact);
        
        // Update the active language in dropdown
        $(".language-option").removeClass("active");
        $(`.language-option[data-lang="${currentLang}"]`).addClass("active");
        
        // Save the language preference
        localStorage.setItem('neotrack-language', currentLang);
    }
    
    // Initial language setup
    updatePageLanguage();
    
    // Language switcher click handler
    $(".language-option").click(function(event) {
        event.preventDefault();
        const newLang = $(this).data("lang");
        if (translations[newLang]) {
            currentLang = newLang;
            updatePageLanguage();
        }
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 800);
    });
    
    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', '#ffffff');
            $('.navbar').css('box-shadow', '0 1px 2px rgba(0, 0, 0, 0.1)');
        } else {
            $('.navbar').css('background-color', 'transparent');
            $('.navbar').css('box-shadow', 'none');
        }
    });
    
    // Form submission handling
    $('#demo-form').submit(function(event) {
        event.preventDefault();
        
        // Get form values
        const fullName = $('#fullName').val();
        const workEmail = $('#workEmail').val();
        const companyName = $('#companyName').val();
        const currentCrm = $('#currentCrm').val();
        
        // Basic validation (can be expanded)
        if (!fullName || !workEmail || !companyName || !currentCrm) {
            alert('Please fill out all fields.');
            return;
        }
        
        // Here you would typically send the data to a server
        // For demonstration purposes we'll just show a success message
        
        // Hide form and show success message
        $('#demo-form').html(`
            <div class="text-center">
                <div class="mb-4">
                    <i class="fas fa-check-circle text-success" style="font-size: 3rem;"></i>
                </div>
                <h3>Thank you, ${fullName}!</h3>
                <p>We've received your request for a demo. Our team will contact you at ${workEmail} shortly.</p>
            </div>
        `);
    });
    
    // Add animation to feature cards on scroll
    $(window).scroll(function() {
        $('.feature-card, .integration-card').each(function() {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 100) {
                $(this).addClass('animated');
            }
        });
    });
    
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // CRM dropdown functionality
    $('#currentCrm').change(function() {
        const selectedCrm = $(this).val();
        if (selectedCrm) {
            console.log('Selected CRM:', selectedCrm);
            // Additional functionality can be added here
        }
    });
});