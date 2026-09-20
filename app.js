(() => {
  const $ = (id) => document.getElementById(id);
  const els = {
    moduleSelect:$('moduleSelect'), questionCount:$('questionCount'), startBtn:$('startBtn'),
    quizPanel:$('quizPanel'), resultPanel:$('resultPanel'), questionText:$('questionText'),
    answers:$('answers'), feedback:$('feedback'), nextBtn:$('nextBtn'),
    progressText:$('progressText'), scoreText:$('scoreText'), progressBar:$('progressBar'),
    finalScore:$('finalScore'), resultMessage:$('resultMessage'), reviewList:$('reviewList'),
    restartBtn:$('restartBtn'), bestScore:$('bestScore'), streakText:$('streakText'),
    clearProgressBtn:$('clearProgressBtn'), categoryText:$('categoryText')
  };

  let quiz = [], current = 0, score = 0, mistakes = [], selectedModule = null;

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function populateModules() {
    window.QUIZ_MODULES.forEach(m => {
      const o = document.createElement('option');
      o.value = m.id; o.textContent = m.title;
      els.moduleSelect.appendChild(o);
    });
  }

  function getProgress() {
    try { return JSON.parse(localStorage.getItem('focQuizProgress') || '{}'); }
    catch { return {}; }
  }

  function setProgress(data) {
    localStorage.setItem('focQuizProgress', JSON.stringify(data));
  }

  function updateProgressView() {
    const p = getProgress();
    const moduleId = els.moduleSelect.value || 'module1';
    const m = p[moduleId];
    els.bestScore.textContent = m?.bestPercent != null ? `Best score: ${m.bestPercent}%` : 'Best score: —';
    els.streakText.textContent = m?.lastStudy ? `Last studied: ${m.lastStudy}` : 'Last studied: —';
  }

  function saveResult(percent) {
    const p = getProgress();
    const id = selectedModule.id;
    const old = p[id] || {};
    const today = new Date().toLocaleDateString();
    p[id] = {
      bestPercent: Math.max(old.bestPercent || 0, percent),
      lastStudy: today,
      attempts: (old.attempts || 0) + 1
    };
    setProgress(p);
    updateProgressView();
  }

  function startQuiz() {
    selectedModule = window.QUIZ_MODULES.find(m => m.id === els.moduleSelect.value) || window.QUIZ_MODULES[0];
    let count = els.questionCount.value === 'all' ? selectedModule.questions.length : Number(els.questionCount.value);
    quiz = shuffle(selectedModule.questions).slice(0, Math.min(count, selectedModule.questions.length));
    current = 0; score = 0; mistakes = [];
    els.resultPanel.classList.add('hidden');
    els.quizPanel.classList.remove('hidden');
    showQuestion();
  }

  function showQuestion() {
    const item = quiz[current];
    els.progressText.textContent = `Question ${current + 1} of ${quiz.length}`;
    els.scoreText.textContent = `Score: ${score}`;
    els.progressBar.style.width = `${((current) / quiz.length) * 100}%`;
    els.categoryText.textContent = selectedModule.title;
    els.questionText.textContent = item.q;
    els.answers.innerHTML = '';
    els.feedback.classList.add('hidden');
    els.nextBtn.classList.add('hidden');

    const order = shuffle(item.choices.map((choice, idx) => ({ choice, idx })));
    order.forEach(({choice, idx}) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'answer';
      b.textContent = choice;
      b.addEventListener('click', () => chooseAnswer(b, idx, item));
      els.answers.appendChild(b);
    });
  }

  function chooseAnswer(button, chosenIndex, item) {
    const buttons = [...els.answers.querySelectorAll('button')];
    buttons.forEach(b => b.disabled = true);

    const correctText = item.choices[item.answer];
    buttons.forEach(b => {
      if (b.textContent === correctText) b.classList.add('correct');
    });

    if (chosenIndex === item.answer) {
      score++;
      els.feedback.innerHTML = `<strong>Correct.</strong><br>${item.explanation}`;
    } else {
      button.classList.add('wrong');
      mistakes.push({q:item.q, correct:correctText, explanation:item.explanation});
      els.feedback.innerHTML = `<strong>Not quite.</strong> Correct answer: <strong>${correctText}</strong><br>${item.explanation}`;
    }

    els.scoreText.textContent = `Score: ${score}`;
    els.feedback.classList.remove('hidden');
    els.nextBtn.classList.remove('hidden');
  }

  function nextQuestion() {
    current++;
    if (current >= quiz.length) return finishQuiz();
    showQuestion();
  }

  function finishQuiz() {
    els.quizPanel.classList.add('hidden');
    els.resultPanel.classList.remove('hidden');
    els.progressBar.style.width = '100%';
    const percent = Math.round((score / quiz.length) * 100);
    els.finalScore.textContent = `${score}/${quiz.length} — ${percent}%`;
    els.resultMessage.textContent =
      percent >= 90 ? 'Excellent. You are showing strong mastery.' :
      percent >= 75 ? 'Good progress. Review the missed concepts once more.' :
      'Keep it small: review the missed concepts, then try another short quiz.';
    els.reviewList.innerHTML = '';
    if (mistakes.length) {
      const h = document.createElement('h3');
      h.textContent = 'Review These';
      els.reviewList.appendChild(h);
      mistakes.forEach(m => {
        const d = document.createElement('div');
        d.className = 'review-item';
        d.innerHTML = `<strong>${m.q}</strong><div>Answer: ${m.correct}</div><small>${m.explanation}</small>`;
        els.reviewList.appendChild(d);
      });
    }
    saveResult(percent);
  }

  els.startBtn.addEventListener('click', startQuiz);
  els.nextBtn.addEventListener('click', nextQuestion);
  els.restartBtn.addEventListener('click', startQuiz);
  els.moduleSelect.addEventListener('change', updateProgressView);
  els.clearProgressBtn.addEventListener('click', () => {
    if (confirm('Clear saved quiz progress?')) {
      localStorage.removeItem('focQuizProgress');
      updateProgressView();
    }
  });

  populateModules();
  updateProgressView();
})();
