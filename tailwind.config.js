tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#FFD2A4',
                nav_backgroud: '#0D0D0D',
                nav_btn: '#1C1D28',
                sub_heading: '#161722',
                service_item_background: '#FFF5EB',
                watch_background: '#F5F2F0',
            },
            maxWidth: {
                'container': '1280px',
            },
            fontFamily: {
                robotocondensed: "Roboto Condensed, sans-serif",
            },
            backgroundImage: {
                'banner': "url('images/banner.jpg')",
                overlay: 'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%)',
                text_gradient: "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
                visit_bg: "url('./images/visit_background.jpg')",
            },
            fontSize: {
                banner_heading: "64px",
            },
        }
    }
}