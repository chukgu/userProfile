<template>
  <div id="app">
    <!-- Header Section -->
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <h1>{{ profile.name }}</h1>
        </div>
        <ul class="nav-menu">
          <li v-for="item in navItems" :key="item.id">
            <a :href="item.href" @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-image">
          <img :src="profile.avatar" :alt="`${profile.name} - ${profile.title}`" width="200" height="200" loading="eager" />
        </div>
        <h1 class="hero-title">{{ profile.title }}</h1>
        <p class="hero-subtitle">{{ profile.subtitle }}</p>
        <div class="hero-summary" v-if="profile.summary">
          <p><strong>{{ profile.summary.name }}</strong>은(는) {{ profile.summary.profession }}로 {{ profile.summary.location }}에 거주하며, {{ profile.summary.yearsOfExperience }}년의 경력을 보유하고 있습니다.</p>
        </div>
        <div class="hero-social">
          <a v-for="social in profile.social" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="social-link" :aria-label="`${social.name} 프로필 링크`">
            <i :class="social.icon"></i>
          </a>
        </div>
        <a :href="googleFormUrl" target="_blank" rel="noopener noreferrer" class="cta-button" aria-label="문의하기 Google Form">Contact Me</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section-title">나를 소개합니다</h2>
        <article class="about-content">
          <p v-for="(paragraph, index) in profile.about" :key="index">{{ paragraph }}</p>
          <div class="about-details" v-if="profile.summary">
            <h3>주요 정보</h3>
            <ul>
              <li><strong>이름:</strong> {{ profile.summary.name }}</li>
              <li><strong>직업:</strong> {{ profile.summary.profession }}</li>
              <li><strong>위치:</strong> {{ profile.summary.location }}</li>
              <li><strong>경력:</strong> {{ profile.summary.yearsOfExperience }}년</li>
              <li><strong>현재 역할:</strong> {{ profile.summary.currentRole }}</li>
              <li><strong>전문 분야:</strong> {{ profile.summary.expertise.join(', ') }}</li>
              <li><strong>언어:</strong> {{ profile.summary.languages.join(', ') }}</li>
            </ul>
          </div>
          <p class="location-info" v-if="profile.location">
            <i class="fas fa-map-marker-alt"></i> 
            {{ profile.location.address.addressLocality }}, {{ profile.location.address.addressCountry === 'KR' ? '대한민국' : profile.location.address.addressCountry }}
          </p>
        </article>
        <div class="skills">
          <h3>Skills</h3>
          <div class="skills-grid">
            <div v-for="skill in profile.skills" :key="skill.name" class="skill-item">
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <h2 class="section-title">경력</h2>
        <div class="timeline">
          <article v-for="(exp, index) in profile.experience" :key="index" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>{{ exp.position }}</h3>
              <h4>{{ exp.company }}</h4>
              <time class="timeline-date" :datetime="exp.period">{{ exp.period }}</time>
              <p>{{ exp.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects">
      <div class="container">
        <h2 class="section-title">프로젝트</h2>
        <div class="projects-grid">
          <article v-for="project in profile.projects" :key="project.id" class="project-card">
            <div class="project-image">
              <img :src="project.image" :alt="`${project.title} 프로젝트 이미지`" width="400" height="300" loading="lazy" />
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
              <div class="project-links">
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link" :aria-label="`${project.title} GitHub 링크`">
                  <i class="fab fa-github"></i> GitHub
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="project-link" :aria-label="`${project.title} 데모 링크`">
                  <i class="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section faq">
      <div class="container">
        <h2 class="section-title">자주 묻는 질문</h2>
        <div class="faq-list">
          <div v-for="(faq, index) in profile.faq" :key="index" class="faq-item">
            <h3 class="faq-question">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <input v-model="form.name" type="text" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input v-model="form.email" type="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <textarea v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navItems: [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'experience', label: 'Experience', href: '#experience' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'faq', label: 'FAQ', href: '#faq' },
        { id: 'contact', label: 'Contact', href: '#contact' }
      ],
      profile: {
        name: 'Joyce',
        title: 'Marketing specialist',
        subtitle: 'Passionate about creating amazing marketing experiences',
        avatar: 'https://via.placeholder.com/200',
        location: {
          address: {
            addressCountry: 'KR',
            addressLocality: 'Seoul',
            addressRegion: 'Seoul',
            postalCode: '00000',
            streetAddress: '서울특별시'
          },
          geo: {
            latitude: 37.5665,
            longitude: 126.9780
          },
          timezone: 'Asia/Seoul'
        },
        social: [
          { name: 'github', url: 'https://github.com', icon: 'fab fa-github' },
          { name: 'linkedin', url: 'https://linkedin.com', icon: 'fab fa-linkedin' },
          { name: 'twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' },
          { name: 'email', url: 'mailto:your@email.com', icon: 'fas fa-envelope' }
        ],
        about: [
          'I am a passionate marketing specialist with experience in building modern marketing applications.',
          'I love working with marketing tools to create scalable and maintainable solutions.'
        ],
        skills: [
          { name: 'Vue.js', level: 90 },
          { name: 'JavaScript', level: 85 },
          { name: 'Node.js', level: 80 },
          { name: 'CSS/SCSS', level: 75 },
          { name: 'Python', level: 70 }
        ],
        experience: [
          {
            position: 'Senior Developer',
            company: 'Tech Company',
            period: '2020 - Present',
            description: 'Leading development of web applications using Vue.js and Node.js.'
          },
          {
            position: 'Frontend Developer',
            company: 'Startup Inc',
            period: '2018 - 2020',
            description: 'Developed responsive web applications and improved user experience.'
          }
        ],
        projects: [
          {
            id: 1,
            title: 'Project One',
            description: 'A modern web application built with Vue.js and Node.js.',
            image: 'https://via.placeholder.com/400x300',
            technologies: ['Vue.js', 'Node.js', 'MongoDB'],
            github: 'https://github.com',
            demo: 'https://demo.com'
          },
          {
            id: 2,
            title: 'Project Two',
            description: 'An e-commerce platform with real-time features.',
            image: 'https://via.placeholder.com/400x300',
            technologies: ['React', 'Express', 'PostgreSQL'],
            github: 'https://github.com',
            demo: 'https://demo.com'
          }
        ],
        faq: [
          {
            question: 'Joyce는 누구인가요?',
            answer: 'Joyce는 마케팅 전문가로, 현대적인 마케팅 애플리케이션 구축 경험을 보유하고 있습니다. 마케팅 도구를 활용하여 확장 가능하고 유지보수가 용이한 솔루션을 만드는 것을 좋아합니다.'
          },
          {
            question: 'Joyce의 주요 기술 스택은 무엇인가요?',
            answer: 'Joyce는 Vue.js(90%), JavaScript(85%), Node.js(80%), CSS/SCSS(75%), Python(70%) 등의 기술을 다룹니다.'
          },
          {
            question: 'Joyce의 경력은 어떻게 되나요?',
            answer: 'Joyce는 현재 Senior Developer로 활동 중이며(2020년~현재), 이전에는 Frontend Developer로 Startup Inc에서 근무했습니다(2018-2020).'
          },
          {
            question: 'Joyce는 어디에 거주하나요?',
            answer: 'Joyce는 대한민국 서울에 거주하고 있습니다.'
          },
          {
            question: 'Joyce에게 어떻게 연락할 수 있나요?',
            answer: 'Contact Me 버튼을 클릭하여 Google Form을 통해 문의하실 수 있습니다. 또는 소셜 미디어 링크를 통해 연락하실 수 있습니다.'
          },
          {
            question: 'Joyce는 어떤 프로젝트를 진행했나요?',
            answer: 'Joyce는 Vue.js와 Node.js로 구축된 현대적인 웹 애플리케이션과 실시간 기능을 갖춘 전자상거래 플랫폼 등의 프로젝트를 진행했습니다.'
          }
        ],
        summary: {
          name: 'Joyce',
          profession: 'Marketing Specialist',
          location: 'Seoul, South Korea',
          expertise: ['Marketing', 'Vue.js', 'JavaScript', 'Node.js', 'Web Development'],
          yearsOfExperience: 6,
          currentRole: 'Senior Developer',
          languages: ['Korean', 'English']
        }
      },
      form: {
        name: '',
        email: '',
        message: ''
      },
      // Google Form 링크를 여기에 입력하세요
      googleFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform'
    }
  },
  mounted() {
    // 동적 메타 태그 업데이트
    this.updateMetaTags();
    // 구조화된 데이터 추가
    this.addStructuredData();
  },
  methods: {
    updateMetaTags() {
      // Title 업데이트
      document.title = `${this.profile.name} - ${this.profile.title} | 프로필`;
      
      // Description 업데이트 (지역 정보 포함)
      const locationText = this.profile.location ? ` (${this.profile.location.address.addressLocality}, ${this.profile.location.address.addressCountry === 'KR' ? '대한민국' : this.profile.location.address.addressCountry})` : '';
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', this.profile.subtitle + locationText);
      
      // GEO 메타 태그 업데이트
      if (this.profile.location) {
        this.updateMetaTag('geo.region', this.profile.location.address.addressCountry);
        this.updateMetaTag('geo.placename', this.profile.location.address.addressLocality);
        this.updateMetaTag('geo.position', `${this.profile.location.geo.latitude};${this.profile.location.geo.longitude}`);
        this.updateMetaTag('ICBM', `${this.profile.location.geo.latitude},${this.profile.location.geo.longitude}`);
      }
      
      // OG Tags 업데이트
      this.updateOGTag('og:title', `${this.profile.name} - ${this.profile.title} | 프로필`);
      this.updateOGTag('og:description', this.profile.subtitle + locationText);
      this.updateOGTag('og:image', this.profile.avatar);
      
      // OG 지역 정보 업데이트
      if (this.profile.location) {
        this.updateOGTag('place:location:latitude', this.profile.location.geo.latitude.toString());
        this.updateOGTag('place:location:longitude', this.profile.location.geo.longitude.toString());
      }
      
      // Twitter Tags 업데이트
      this.updateOGTag('twitter:title', `${this.profile.name} - ${this.profile.title} | 프로필`);
      this.updateOGTag('twitter:description', this.profile.subtitle + locationText);
      this.updateOGTag('twitter:image', this.profile.avatar);
    },
    updateMetaTag(name, content) {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    },
    updateOGTag(property, content) {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    },
    addStructuredData() {
      // 기존 구조화된 데이터 제거
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());
      
      // Person 스키마 추가
      const personScript = document.createElement('script');
      personScript.type = 'application/ld+json';
      personScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": this.profile.name,
        "jobTitle": this.profile.title,
        "description": this.profile.subtitle,
        "image": this.profile.avatar,
        "url": window.location.href,
        "sameAs": this.profile.social.map(s => s.url),
        "knowsAbout": this.profile.skills.map(s => s.name),
        "hasOccupation": {
          "@type": "Occupation",
          "name": this.profile.title,
          "occupationLocation": {
            "@type": "City",
            "name": this.profile.location?.address?.addressLocality || "Seoul"
          },
          "skills": this.profile.skills.map(s => s.name)
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": this.profile.location?.address?.addressCountry || "KR",
          "addressLocality": this.profile.location?.address?.addressLocality || "Seoul",
          "addressRegion": this.profile.location?.address?.addressRegion || "Seoul",
          "postalCode": this.profile.location?.address?.postalCode || "",
          "streetAddress": this.profile.location?.address?.streetAddress || ""
        },
        "homeLocation": {
          "@type": "Place",
          "name": this.profile.location?.address?.addressLocality || "Seoul",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": this.profile.location?.address?.addressCountry || "KR",
            "addressLocality": this.profile.location?.address?.addressLocality || "Seoul"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": this.profile.location?.geo?.latitude || 37.5665,
            "longitude": this.profile.location?.geo?.longitude || 126.9780
          }
        },
        "worksFor": {
          "@type": "Organization",
          "name": this.profile.experience[0]?.company || "Freelance",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": this.profile.location?.address?.addressCountry || "KR",
            "addressLocality": this.profile.location?.address?.addressLocality || "Seoul"
          }
        },
        "nationality": {
          "@type": "Country",
          "name": "South Korea"
        },
        "alumniOf": this.profile.experience.map(exp => ({
          "@type": "Organization",
          "name": exp.company
        })),
        "award": this.profile.skills.map(skill => `${skill.name} (${skill.level}%)`).join(", "),
        "description": `${this.profile.name}는 ${this.profile.title}로 ${this.profile.location?.address?.addressLocality || "Seoul"}에 거주하며, ${this.profile.skills.map(s => s.name).join(", ")} 등의 기술을 보유하고 있습니다. ${this.profile.experience.length}년의 경력을 가지고 있으며, 현재 ${this.profile.experience[0]?.position || "Freelance"}로 활동 중입니다.`
      });
      document.head.appendChild(personScript);
      
      // FAQPage 스키마 추가 (GEO 최적화)
      if (this.profile.faq && this.profile.faq.length > 0) {
        const faqScript = document.createElement('script');
        faqScript.type = 'application/ld+json';
        faqScript.text = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": this.profile.faq.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        });
        document.head.appendChild(faqScript);
      }
      
      // ProfilePage 스키마 추가
      const profilePageScript = document.createElement('script');
      profilePageScript.type = 'application/ld+json';
      profilePageScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "about": {
          "@type": "Person",
          "name": this.profile.name
        },
        "description": `${this.profile.name}의 프로필 페이지입니다. ${this.profile.title}로 활동하며 ${this.profile.location?.address?.addressLocality || "Seoul"}에 거주합니다.`,
        "keywords": `${this.profile.name}, ${this.profile.title}, ${this.profile.location?.address?.addressLocality || "Seoul"}, ${this.profile.skills.map(s => s.name).join(", ")}`
      });
      document.head.appendChild(profilePageScript);
    },
    scrollTo(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleSubmit() {
      // Handle form submission
      console.log('Form submitted:', this.form);
      alert('Thank you for your message! I will get back to you soon.');
      this.form = { name: '', email: '', message: '' };
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  scroll-behavior: smooth;
}

#app {
  min-height: 100vh;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h1 {
  font-size: 1.5rem;
  color: #2c3e50;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: #3498db;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding-top: 80px;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.hero-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid white;
  margin-bottom: 2rem;
  object-fit: cover;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: fadeInUp 1s 0.2s both;
}

.hero-social {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s 0.4s both;
}

.social-link {
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.social-link:hover {
  transform: translateY(-5px);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeInUp 1s 0.6s both;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Sections */
.section {
  padding: 5rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

/* About Section */
.about {
  background: #f8f9fa;
}

.about-content p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.about-details {
  margin-top: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.about-details h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.about-details ul {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
}

.about-details li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1.1rem;
  color: #555;
}

.about-details li:last-child {
  border-bottom: none;
}

.about-details strong {
  color: #2c3e50;
  font-weight: 600;
  margin-right: 0.5rem;
}

.location-info {
  color: #667eea;
  font-weight: 600;
  margin-top: 1.5rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.location-info i {
  font-size: 1.2rem;
}

.skills {
  margin-top: 3rem;
}

.skills h3 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #2c3e50;
}

.skills-grid {
  max-width: 600px;
  margin: 0 auto;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-name {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.skill-bar {
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 5px;
  transition: width 1s ease;
}

/* Experience Section */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #667eea;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -1.5rem;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #667eea;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.timeline-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

/* Projects Section */
.projects {
  background: #f8f9fa;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.project-content p {
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  background: #e8eaf6;
  color: #667eea;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.project-link:hover {
  color: #764ba2;
}

/* FAQ Section */
.faq {
  background: #ffffff;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  transition: transform 0.3s, box-shadow 0.3s;
}

.faq-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.faq-question {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.faq-answer {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
}

/* Hero Summary */
.hero-summary {
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 1s 0.3s both;
}

.hero-summary p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.hero-summary strong {
  font-weight: 600;
}

/* Contact Section */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

/* Footer */
.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
    font-size: 0.9rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-item {
    padding-left: 2rem;
  }
}
</style>