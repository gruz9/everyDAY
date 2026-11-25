const addButton = document.querySelector('button');
const studyTopic = document.querySelector('#study-topic');
const studyNotes = document.querySelector('#study-notes');
const recordList = document.querySelector('#record-list');

addButton.addEventListener('click', function() {
    if (studyTopic.value.trim() === '' || studyNotes.value.trim() === '') {
        alert('스터디 주제와 내용을 모두 입력해주세요.');
        return;
    }
    alert(`스터디 주제: ${studyTopic.value}\n스터디 내용: ${studyNotes.value}`);
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${studyTopic.value}</h3>
        <p>${studyNotes.value}</p>
    `;
    recordList.appendChild(article);
    studyTopic.value = '';
    studyNotes.value = '';
});