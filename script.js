// Ambil elemen
const cvForm = document.getElementById("cv-form");
const cvPreview = document.getElementById("cv-preview");
const jobRecommendations = document.getElementById("job-recommendations");

// Load jobs.json
let jobs = [];
fetch("jobs.json")
  .then(response => response.json())
  .then(data => jobs = data);

// Event form submit
cvForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Ambil data user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const major = document.getElementById("major").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value.split(",").map(s => s.trim());
    const hobbies = document.getElementById("hobbies").value;

    // Generate CV
    cvPreview.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Pendidikan: ${education} - ${major}</p>
        <p>Pengalaman: ${experience}</p>
        <p>Skill: ${skills.join(", ")}</p>
        <p>Hobi: ${hobbies}</p>
    `;

    // Rekomendasi pekerjaan
    const recommendedJobs = jobs.filter(job => {
        const educationMatch = job.education.includes(education);
        const skillMatch = job.skills.some(skill => skills.includes(skill));
        return educationMatch && skillMatch;
    });

    if(recommendedJobs.length === 0){
        jobRecommendations.innerHTML = "<p>Tidak ada pekerjaan yang cocok.</p>";
    } else {
        jobRecommendations.innerHTML = recommendedJobs.map(job => `
            <div>
                <strong>${job.title}</strong> - ${job.company}
                <p>Skills dibutuhkan: ${job.skills.join(", ")}</p>
            </div>
        `).join("");
    }
});
