/* ══════════════════════════════════════════════════════════════
   PORTFOLIO - Dinamičko učitavanje podataka
   ══════════════════════════════════════════════════════════════ */

// Podatci studenata
const studentsData = {
  ante: {
    name: "Ante Klarić",
    basicInfo: {
      dateOfBirth: "27. rujan 2004.",
      placeOfBirth: '<a href="https://hr.wikipedia.org/wiki/Zenica" target="_blank">Zenica</a>',
      residence: '<a href="https://hr.wikipedia.org/wiki/%C5%BDep%C4%8De" target="_blank">Žepče, Bosna i Hercegovina</a>',
      gender: "Muško",
      hobbies: '<a href="https://hr.wikipedia.org/wiki/Kickboxing" target="_blank">Kickboxing</a>, <a href="https://hr.wikipedia.org/wiki/Nogomet" target="_blank">Nogomet</a>, Sviranje gitare'
    },
    education: [
      {
        institution: '<a href="https://www.oszepce.org/" target="_blank">OŠ Žepče</a>',
        period: "2010. - 2019.",
        location: "Žepče"
      },
      {
        institution: '<a href="https://smszepce.info/" target="_blank">Srednja mješovita škola Žepče</a>',
        period: "2019. - 2023.",
        location: "Žepče",
        note: "Smjer: Web dizajner"
      },
      {
        institution: '<a href="https://www.ferit.unios.hr" target="_blank">FERIT Osijek</a>',
        period: "2023. - danas",
        location: "Osijek",
        note: "Stručni prijediplomski studij računarstva"
      }
    ],
    skills: [
      { name: "HTML & CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 80 },
      { name: "Git & GitHub", level: 80 }
    ],
    workExperience: [
      {
        position: "Full-Stack Web Developer - Praksa",
        company: '<a href="https://customisedcloud.hr/" target="_blank">Customised Cloud d.o.o.</a>',
        period: "15.12.2025 - 30.1.2026.",
        description: "Razvoj full-stack web aplikacije koristeći tehnologije Angular i Laravel"
      }
    ],
    otherInfo: 'Sudjelovao u <a href="https://www.facebook.com/leadprogramBiH/?locale=hr_HR" target="_blank">LEAD programu</a> Ambasade Sjedinjenih Američkih Država u Bosni i Hercegovini od 2020. do 2022., edukacijskom programu za razvoj timskog rada i građanskog angažmana.'
  },
  
  josip: {
    name: "Josip Kranic",
    basicInfo: {
      dateOfBirth: "11. listopad 2002.",
      placeOfBirth: '<a href="https://hr.wikipedia.org/wiki/Osijek" target="_blank">Osijek</a>',
      residence: '<a href="https://hr.wikipedia.org/wiki/Markovac_Našički" target="_blank">Markovac Našički, Hrvatska</a>',
      gender: "Muško",
      hobbies: "Sviranje gitare, Bicikliranje, Gaming"
    },
    education: [
      {
        institution: '<a href="https://os-kralja-tomislava-na.skole.hr/" target="_blank">OŠ Kralja Tomislava Našice</a>',
        period: "2011. - 2019.",
        location: "Našice"
      },
      {
        institution: '<a href="https://ss-ikrsnjavoga-nasice.skole.hr/" target="_blank">Srednja škola Isidora Kršnjavoga</a>',
        period: "2019. - 2023.",
        location: "Našice",
        note: "Tehničar za elektroniku"
      },
      {
        institution: '<a href="https://www.ferit.unios.hr" target="_blank">FERIT Osijek</a>',
        period: "2023. - danas",
        location: "Osijek",
        note: "Stručni prijediplomski studij računarstva"
      }
    ],
    skills: [
      { name: "Python", level: 80 },
      { name: "Git", level: 90 },
      { name: "SQL", level: 75 },
      { name: "Linux", level: 65 },
      { name: "DB administration", level: 85 }
    ],
    workExperience: [
      {
        position: "Pripravnik - Odjel za centralni sustav",
        company: '<a href="https://www.apis-it.hr/web/naslovnica" target="_blank">Apis IT</a>',
        period: "2025. - danas.",
        description: "Testiranje modernih rješenja interakcije s z/OS-om, dokumentiranje sustava, izrada skripti za automatizaciju poslova u sferi baza podataka"
      }
    ],
    otherInfo: "Aktivan član studentskog kluba programiranja. Sudjelovao na hackathonu \"Code Challenge 2024\" gdje je tim osvojio 3. mjesto."
    
  }
};

// Trenutno aktivni student
let currentStudent = 'ante';

/* ─────────────────────────────────────────────────────────────
   FUNKCIJE ZA RENDERIRANJE
   ───────────────────────────────────────────────────────────── */

// Generira HTML za osnovne informacije
function renderBasicInfo(data) {
  return `
    <div class="cv-card">
      <h3>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        Opće informacije
      </h3>
      <div class="cv-card-divider"></div>
      
      <div class="cv-item">
        <div class="cv-item-label">Datum rođenja</div>
        <div class="cv-item-value">${data.dateOfBirth}</div>
      </div>
      
      <div class="cv-item">
        <div class="cv-item-label">Mjesto rođenja</div>
        <div class="cv-item-value">${data.placeOfBirth}</div>
      </div>
      
      <div class="cv-item">
        <div class="cv-item-label">Mjesto stanovanja</div>
        <div class="cv-item-value">${data.residence}</div>
      </div>
      
      <div class="cv-item">
        <div class="cv-item-label">Spol</div>
        <div class="cv-item-value">${data.gender}</div>
      </div>
      
      <div class="cv-item">
        <div class="cv-item-label">Hobiji</div>
        <div class="cv-item-value">${data.hobbies}</div>
      </div>
    </div>
  `;
}

// Generira HTML za obrazovanje
function renderEducation(educationArray) {
  const items = educationArray.map(edu => `
    <div class="cv-item">
      <div class="cv-item-label">${edu.period}</div>
      <div class="cv-item-value">
        <strong>${edu.institution}</strong><br>
        ${edu.location}${edu.note ? `<br><em style="color:var(--muted);font-size:0.9rem;">${edu.note}</em>` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div class="cv-card">
      <h3>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
        Obrazovanje
      </h3>
      <div class="cv-card-divider"></div>
      ${items}
    </div>
  `;
}

// Generira HTML za vještine
function renderSkills(skillsArray) {
  const skillItems = skillsArray.map(skill => `
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-bar-fill" data-width="${skill.level}"></div>
      </div>
    </div>
  `).join('');

  return `
    <div class="cv-card">
      <h3>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
        Vještine
      </h3>
      <div class="cv-card-divider"></div>
      <div class="skill-list">
        ${skillItems}
      </div>
    </div>
  `;
}

// Generira HTML za radno iskustvo
function renderWorkExperience(workArray) {
  const items = workArray.map(work => `
    <div class="cv-item">
      <div class="cv-item-label">${work.period}</div>
      <div class="cv-item-value">
        <strong>${work.position}</strong><br>
        ${work.company}<br>
        <em style="color:var(--muted);font-size:0.9rem;">${work.description}</em>
      </div>
    </div>
  `).join('');

  return `
    <div class="cv-card">
      <h3>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        Radno iskustvo
      </h3>
      <div class="cv-card-divider"></div>
      ${items}
    </div>
  `;
}

// Generira HTML za dodatne informacije
function renderOtherInfo(info) {
  return `
    <div class="cv-card">
      <h3>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Dodatne aktivnosti
      </h3>
      <div class="cv-card-divider"></div>
      <div class="cv-item-value" style="line-height:1.8;">
        ${info}
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────────────────────
   UČITAVANJE PODATAKA (SIMULACIJA FETCH)
   ───────────────────────────────────────────────────────────── */

function loadStudentData(studentKey) {
  const contentDiv = document.getElementById('portfolioContent');
  
  // Prikaži loading spinner
  contentDiv.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Učitavanje podataka...</p>
    </div>
  `;
  
  // Simuliraj async učitavanje (kao da fetchamo s API-ja)
  setTimeout(() => {
    const student = studentsData[studentKey];
    
    if (!student) {
      contentDiv.innerHTML = '<p style="text-align:center;color:var(--muted);">Podatci nisu pronađeni.</p>';
      return;
    }
    
    // Generiraj HTML
    const html = `
      <div class="cv-grid">
        ${renderBasicInfo(student.basicInfo)}
        ${renderEducation(student.education)}
        ${renderSkills(student.skills)}
        ${renderWorkExperience(student.workExperience)}
        ${renderOtherInfo(student.otherInfo)}
      </div>
    `;
    
    contentDiv.innerHTML = html;
    
    // Animiraj skill barove
    setTimeout(() => {
      const skillBars = contentDiv.querySelectorAll('.skill-bar-fill');
      skillBars.forEach(bar => {
        const width = bar.dataset.width;
        bar.style.width = width + '%';
      });
    }, 100);
    
  }, 600); // Simuliraj network delay
}

/* ─────────────────────────────────────────────────────────────
   EVENT LISTENERS
   ───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.portfolio-tab');
  
  // Učitaj podatke za prvog studenta
  loadStudentData(currentStudent);
  
  // Event listener za tab klikove
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const studentKey = tab.dataset.student;
      
      // Ako je već aktivan, ne radi ništa
      if (studentKey === currentStudent) return;
      
      // Ukloni active class sa svih tabova
      tabs.forEach(t => t.classList.remove('active'));
      
      // Dodaj active class na kliknuti tab
      tab.classList.add('active');
      
      // Učitaj nove podatke
      currentStudent = studentKey;
      loadStudentData(studentKey);
    });
  });
});
