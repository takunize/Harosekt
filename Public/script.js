document.addEventListener('DOMContentLoaded', () => {
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const saveChangesBtn = document.getElementById('save-changes-btn');
    const closeModalBtn = document.getElementById('close-btn');
    const modal = document.getElementById('edit-profile-modal');
    const profilePicture = document.getElementById('profile-picture');
    const username = document.getElementById('username');
    const bannerImage = document.getElementById('banner-image');
    const profileFrame = document.getElementById('profile-frame');

    // Mostrar modal de edición de perfil al hacer clic en el botón "Ajustes"
    editProfileBtn.addEventListener('click', () => {
        modal.style.display = "block";
    });

    // Cerrar modal al hacer clic en el botón de cierre
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera del modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Guardar cambios al hacer clic en el botón "Guardar Cambios"
    saveChangesBtn.addEventListener('click', () => {
        const newProfilePicture = document.getElementById('new-profile-picture').value;
        const newUsername = document.getElementById('new-username').value;
        const newBanner = document.getElementById('new-banner').value;
        const selectedFrame = profileFrame.value;

        if (newProfilePicture) {
            profilePicture.src = newProfilePicture;
        }

        if (newUsername) {
            username.textContent = newUsername;
        }

        if (newBanner) {
            bannerImage.src = newBanner;
        }

        // Aplicar el marco seleccionado a la foto de perfil
        profilePicture.className = 'profile-picture'; // Reiniciar clases
        if (selectedFrame) {
            profilePicture.classList.add(selectedFrame);
        }

        modal.style.display = "none";
    });

    // Función para enviar un mensaje
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    sendBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            socket.emit('chat message', message);
            chatInput.value = '';
        }
    });

    socket.on('chat message', (msg) => {
        const newMessage = document.createElement('div');
        newMessage.textContent = msg;
        newMessage.className = 'message';
        chatMessages.appendChild(newMessage);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const memberBtn = document.getElementById("member-btn");
    const memberList = document.getElementById("member-list");

    memberBtn.addEventListener("click", function() {
        memberList.classList.toggle("show");
    });
});
