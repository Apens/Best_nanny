document.addEventListener('DOMContentLoaded', function () {
    const addNannyForm = document.getElementById('addNannyForm');
    const nannyList = document.getElementById('nannyList');
    const ratingStars = document.querySelectorAll('#rating .star'); // Sélectionne tous les éléments étoiles dans le conteneur avec l'id "rating"
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const openFormButton = document.getElementById('openFormButton');
    const closeFormButton = document.getElementById('closeFormButton');
    const nannyFormPopup = document.getElementById('nannyFormPopup');

    let selectedRating = 0; // Variable pour stocker la note sélectionnée

    // Function to open the popup
    openFormButton.addEventListener('click', () => {
        nannyFormPopup.style.display = 'block';
    });

    // Function to close the popup
    closeFormButton.addEventListener('click', () => {
        nannyFormPopup.style.display = 'none';
    });

    // Close the popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === nannyFormPopup) {
            nannyFormPopup.style.display = 'none';
        }
    });

    // Initial data to populate localStorage
    const initialNannies = [
        {
            name: 'Fatou Diop',
            skills: ['Patiente', 'Attentionnée', 'Créative'],
            experience: 5,
            rating: 5
        },
        {
            name: 'Amina Sow',
            skills: ['Organisée', 'Ponctuelle', 'Douce'],
            experience: 3,
            rating: 4
        },
        {
            name: 'Marie Ndiaye',
            skills: ['Enthousiaste', 'Énergique', 'Bienveillante'],
            experience: 4,
            rating: 4
        }
    ];

    // Function to initialize localStorage with initial data
    function initializeLocalStorage() {
        if (!localStorage.getItem('nannies')) {
            localStorage.setItem('nannies', JSON.stringify(initialNannies));
        }
    }

    // Function to display stars based on rating
    function displayStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '<span class="star selected">★</span>';
            } else {
                stars += '<span class="star">☆</span>';
            }
        }
        return stars;
    }

    // Fetch and display nannies from localStorage
    function fetchNannies() {
        const nannies = JSON.parse(localStorage.getItem('nannies')) || [];
        nannyList.innerHTML = '';
        nannies.forEach(nanny => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${nanny.name}</strong><br>
                Compétences: ${nanny.skills.join(', ')}<br>
                Expérience: ${nanny.experience} années<br>
                Évaluation: ${displayStars(nanny.rating)}
            `;
            nannyList.appendChild(li);
        });
    }

    // Add new nanny
    addNannyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(addNannyForm);
        const nannyData = {
            name: formData.get('name'),
            skills: formData.get('skills').split(',').map(skill => skill.trim()),
            experience: parseInt(formData.get('experience')),
            rating: selectedRating
        };

        let nannies = JSON.parse(localStorage.getItem('nannies')) || [];
        nannies.push(nannyData);
        localStorage.setItem('nannies', JSON.stringify(nannies));
        fetchNannies();
        addNannyForm.reset();
        selectedRating = 0;
        updateStarDisplay();
        nannyFormPopup.style.display = 'none'; // Close the popup after form submission
    });

    // Initialize localStorage and fetch nannies on page load
    initializeLocalStorage();
    fetchNannies();

    // Update star display based on selected rating
    function updateStarDisplay() {
        ratingStars.forEach(star => {
            star.classList.remove('selected');
            if (parseInt(star.getAttribute('data-value')) <= selectedRating) {
                star.classList.add('selected');
            }
        });
    }

    // Add event listeners to stars for rating selection
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            updateStarDisplay();
        });

        star.addEventListener('mouseover', () => {
            star.classList.add('hover');
        });

        star.addEventListener('mouseout', () => {
            star.classList.remove('hover');
        });
    });

    // Chat functionality
    chatButton.addEventListener('click', () => {
        if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
            chatWindow.style.display = 'block';
        } else {
            chatWindow.style.display = 'none';
        }
    });

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const userMessage = chatInput.value;
            addChatMessage('user', userMessage);
            chatInput.value = '';

            // Process the message
            processUserMessage(userMessage);
        }
    });

    function addChatMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function processUserMessage(message) {
        const nannies = JSON.parse(localStorage.getItem('nannies')) || [];
        const criteria = extractCriteria(message);

        console.log('Extracted criteria:', criteria);

        const filteredNannies = nannies.filter(nanny => {
            return (
                (!criteria.skills || criteria.skills.every(skill => nanny.skills.map(s => s.toLowerCase()).includes(skill.toLowerCase()))) &&
                (!criteria.experience || nanny.experience >= criteria.experience)
            );
        });

        if (filteredNannies.length > 0) {
            const bestNanny = filteredNannies.reduce((best, current) => {
                return (current.rating > best.rating) ? current : best;
            }, filteredNannies[0]);
            addChatMessage('bot', `La meilleure nounou pour vos critères est ${bestNanny.name} avec une évaluation de ${bestNanny.rating} étoiles.`);
        } else {
            addChatMessage('bot', "Je suis désolé, aucune nounou ne correspond à vos critères.");
        }
    }
        // format du message cherche nounou ayant pour compétences: Ponctuelle, Douce et expérience: 2 années
    function extractCriteria(message) {
        // Match skills and remove any part of the string that mentions "expérience"
        const skillsMatch = message.match(/compétences\s*:\s*([a-zA-Z, éèêàâçîïôûùü]+)/i);
        const experienceMatch = message.match(/expérience\s*:\s*(\d+)/i);
        console.log(skillsMatch);
        console.log(experienceMatch);
        let skills = null;
        if (skillsMatch) {
            skills = skillsMatch[1].split(',').map(skill => skill.trim()).filter(skill => !skill.includes('expér'));
        }

        console.log('skillsMatch:', skillsMatch);
        console.log('experienceMatch:', experienceMatch);

        return {
            skills: skills,
            experience: experienceMatch ? parseInt(experienceMatch[1]) : null
        };
    }
});
