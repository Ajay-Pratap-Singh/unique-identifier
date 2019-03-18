const course = document.getElementById('course');

const branch = document.getElementById('branch');

const year = document.getElementById('year');

window.addEventListener('load', () => {
  course.innerHTML = ` 
    <option selected value="none">Course</option>
    <option value="Bachelor of Technology"
     >1. Bachelor of Technology</option
   >
   <option value="Master of Technology"
     >2. Master of Technology</option
   >
   <option value="Bachelor of Science"
     >3. Bachelor of Science</option
   >
   <option value="Master of Science">4. Master of Science</option>
   <option value="B.sc Integrated">5. B.sc Integrated</option>
   <option value="Bachelor of Business Administration"
     >6. Bachelor of Business Administration</option
   >
   <option value="Master of Business Administration"
     >7. Master of Business Administration</option
   >
   <option value="BBA Integrated">8. BBA Integrated</option>
   <option value="Bachelor of Architecture"
     >9. Bachelor of Architecture
   </option>
   <option value="Master of Architecture"
     >10. Master of Architecture</option
   >
   <option value="Bachelor in Computer Application"
     >11. Bachelor in Computer Application</option
   >
   <option value="Master of Computer Applications"
     >12. Master of Computer Applications</option
   >
   <option value="BCA Integrated">13. BCA Integrated</option>
   <option value="Doctor of Philosophy">14. Doctor of Philosophy</option>
   `;
});

const addYears = max => {
  year.innerHTML = ` <option selected value="none">Year</option>`;

  for (let i = 1; i <= max; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i);
    if (i == 1) {
      option.textContent = '1st';
    } else if (i == 2) {
      option.textContent = '2nd';
    } else if (i == 3) {
      option.textContent = '3rd';
    } else {
      option.textContent = i + 'th';
    }
    year.appendChild(option);
  }
};

course.addEventListener('change', () => {
  const courseValue = course.value;

  if (courseValue == 'none') {
    year.innerHTML = ` <option selected value="none">Year</option>`;
    branch.innerHTML = ` <option selected value="none">Branch</option>`;
  } else if (courseValue == 'Bachelor of Technology') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Biomedical Engineering">1. Biomedical Engineering</option>
                  <option  value ="Biotechnology">2. Biotechnology</option>
                  <option  value ="Civil  Engineering">3. Civil  Engineering</option>
                  <option  value ="Computer Science Engineering">4. Computer Science Engineering</option>
                  <option  value ="Chemical Engineering">5. Chemical Engineering</option>
                  <option  value ="Electrical Engineering">6. Electrical Engineering</option>
                  <option  value ="Electronics & Communication Engineering">7. Electronics & Communication Engineering</option>
                  <option  value ="Mechanical Engineering">8. Mechanical Engineering</option>
                  <option  value ="Others">9. Others</option>
      `;
    addYears(4);
  } else if (courseValue == 'Master of Technology') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Biomedical Engineering">1. Biomedical Engineering</option>
                  <option  value ="Biotechnology">2. Biotechnology</option>
                  <option  value ="Civil  Engineering">3. Civil  Engineering</option>
                  <option  value ="Computer Science Engineering">4. Computer Science Engineering</option>
                  <option  value ="Chemical Engineering">5. Chemical Engineering</option>
                  <option  value ="Electrical Engineering">6. Electrical Engineering</option>
                  <option  value ="Electronics & Communication Engineering">7. Electronics & Communication Engineering</option>
                  <option  value ="Mechanical Engineering">8. Mechanical Engineering</option>
                  <option  value ="Center of Excellence and Environmental Studies">9. Center of Excellence and Environmental Studies</option>
                  <option  value ="Others">9. Others</option>
                  
      `;
    addYears(2);
  } else if (courseValue == 'Doctor of Philosophy') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Biomedical Engineering">1. Biomedical Engineering</option>
                  <option  value ="Biotechnology">2. Biotechnology</option>
                  <option  value ="Civil  Engineering">3. Civil  Engineering</option>
                  <option  value ="Computer Science Engineering">4. Computer Science Engineering</option>
                  <option  value ="Chemical Engineering">5. Chemical Engineering</option>
                  <option  value ="Electrical Engineering">6. Electrical Engineering</option>
                  <option  value ="Electronics & Communication Engineering">7. Electronics & Communication Engineering</option>
                  <option  value ="Mechanical Engineering">8. Mechanical Engineering</option>
                  <option  value ="Center of Excellence and Environmental Studies">9. Center of Excellence and Environmental Studies</option>
                  <option  value ="Others">10. Others</option>
                  
      `;
    addYears(3);
  } else if (courseValue == 'Bachelor of Science') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Physics">1. Physics</option>
                  <option  value ="Chemistry">2. Chemistry</option>
                  <option  value ="Maths">3. Maths</option>
    
      `;
    addYears(3);
  } else if (courseValue == 'Master of Science') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Physics">1. Physics</option>
                  <option  value ="Chemistry">2. Chemistry</option>
                  <option  value ="Maths">3. Maths</option>
                  <option  value ="Center of Excellence and Environmental Studies">4. Center of Excellence and Environmental Studies</option>
    
      `;
    addYears(2);
  } else if (courseValue == 'B.sc Integrated') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Physics">1. Physics</option>
                  <option  value ="Chemistry">2. Chemistry</option>
                  <option  value ="Maths">3. Maths</option>
                  <option  value ="Center of Excellence and Environmental Studies">4. Center of Excellence and Environmental Studies</option>
    
      `;
    addYears(5);
  } else if (courseValue == 'Bachelor of Business Administration') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Bachelor of Business Administration">1. Bachelor of Business Administration</option>  
      `;
    addYears(3);
  } else if (courseValue == 'Master of Business Administration') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Master of Business Administration">1. Master of Business Administration</option>  
      `;
    addYears(2);
  } else if (courseValue == 'BBA Integrated') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="BBA Integrated">1. BBA Integrated</option>  
      `;
    addYears(5);
  } else if (courseValue == 'Bachelor of Architecture') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Bachelor of Architecture">1. Bachelor of Architecture</option>  
      `;
    addYears(5);
  } else if (courseValue == 'Master of Architecture') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Master of Architecture">1. Master of Architecture</option>  
      `;
    addYears(2);
  } else if (courseValue == 'Bachelor in Computer Application') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Bachelor in Computer Application">1. Bachelor in Computer Application</option>  
      `;
    addYears(3);
  } else if (courseValue == 'Master of Computer Applications') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="Master of Computer Applications">1. Master of Computer Applications</option>  
      `;
    addYears(2);
  } else if (courseValue == 'BCA Integrated') {
    branch.innerHTML = `
                  <option selected value ="none">Branch</option>
                  <option  value ="BCA Integrated">1. BCA Integrated</option>  
      `;
    addYears(5);
  } else {
    addYears(5);
  }
});
