document.addEventListener('DOMContentLoaded', function() {
    fetch('data/members.json')  // Correct path to the members.json file
        .then(response => response.json())  // Parse JSON data
        .then(members => {
            const memberList = document.getElementById('member-list');
            
            // Ensure that there's data in the 'members' array
            if (members.length === 0) {
                memberList.innerHTML = "<p>No members found.</p>";
            } else {
                members.forEach(member => {
                    const memberItem = document.createElement('div');
                    memberItem.classList.add('member-item'); // Add a class for styling
                    memberItem.innerHTML = `
                        <h3>${member.name}</h3>
                        <p><strong>Username:</strong> ${member.username}</p>
                        <p><strong>Email:</strong> ${member.email}</p>
                        <p><strong>Joined on:</strong> ${member.join_date}</p>
                        <p><strong>Favorite Game:</strong> ${member.favorite_game}</p>
                    `;
                    memberList.appendChild(memberItem); // Add each member's info to the list
                });
            }
        })
        .catch(error => {
            console.error('Error loading members data:', error); // Log errors if any
        });
});
