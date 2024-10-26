// // script.js
// let bugs = [];

// function addBug() {
//     const description = document.getElementById('bugDescription').value;
//     const priority = document.getElementById('bugPriority').value;
//     const status = document.getElementById('bugStatus').value;

//     if (description.trim() === "") {
//         alert("Please enter a bug description.");
//         return;
//     }

//     const bug = {
//         id: Date.now(),
//         description,
//         priority,
//         status
//     };

//     bugs.push(bug);
//     displayBugs();
//     clearForm();
// }

// function clearForm() {
//     document.getElementById('bugDescription').value = '';
//     document.getElementById('bugPriority').value = 'Low';
//     document.getElementById('bugStatus').value = 'Open';
// }

// function displayBugs(filter = 'All') {
//     const bugList = document.getElementById('bugs');
//     bugList.innerHTML = '';

//     const filteredBugs = filter === 'All' ? bugs : bugs.filter(bug => bug.status === filter);

//     filteredBugs.forEach(bug => {
//         const bugItem = document.createElement('li');
//         bugItem.innerHTML = `
//             <span><strong>${bug.description}</strong> - Priority: ${bug.priority} - Status: ${bug.status}</span>
//             <select onchange="updateStatus(${bug.id}, this.value)">
//                 <option value="Open" ${bug.status === 'Open' ? 'selected' : ''}>Open</option>
//                 <option value="In Progress" ${bug.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
//                 <option value="Closed" ${bug.status === 'Closed' ? 'selected' : ''}>Closed</option>
//             </select>
//         `;
//         bugList.appendChild(bugItem);
//     });
// }

// function updateStatus(id, newStatus) {
//     bugs = bugs.map(bug => bug.id === id ? { ...bug, status: newStatus } : bug);
//     displayBugs(document.getElementById('statusFilter').value);
// }

// function filterBugs() {
//     const filter = document.getElementById('statusFilter').value;
//     displayBugs(filter);
// }

// // Initial display
// displayBugs();
