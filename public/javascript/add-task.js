// creating a custom task
async function createCustomTask(event) {
    event.preventDefault();

    const task_name = document.querySelector('.input').value;

    const response = await fetch(`/api/tasks`, {
        method: 'POST',
        body: JSON.stringify({
            task_name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.getElementById("create-task-btn").addEventListener('click', createCustomTask);
