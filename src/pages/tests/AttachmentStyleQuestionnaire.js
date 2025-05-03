import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TestStyles.css';

function AttachmentStyleQuestionnaire() {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [answers, setAnswers] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
    q6: null, q7: null, q8: null, q9: null, q10: null,
    q11: null, q12: null, q13: null, q14: null, q15: null,
    q16: null, q17: null, q18: null, q19: null, q20: null,
    q21: null, q22: null, q23: null, q24: null, q25: null,
    q26: null, q27: null, q28: null, q29: null, q30: null,
    q31: null, q32: null, q33: null, q34: null, q35: null,
    q36: null, q37: null, q38: null, q39: null, q40: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'q1',
      text: 'Я чувствую себя уверенно в близких отношениях.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q2',
      text: 'Мне легко доверять своему партнеру.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'NeedForApproval',
    },
    {
      id: 'q3',
      text: 'Я чувствую себя комфортно, полагаясь на других.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Discomfort',
      reverse: true,
    },
    {
      id: 'q4',
      text: 'Я верю, что мои близкие отношения будут длительными.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q5',
      text: 'Я чувствую себя в безопасности в своих отношениях.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Preoccupation',
    },
    {
      id: 'q6',
      text: 'Мне некомфортно, когда кто-то становится слишком близким ко мне.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q7',
      text: 'Я предпочитаю держать дистанцию в отношениях.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Discomfort',
      reverse: true,
    },
    {
      id: 'q8',
      text: 'Я чувствую себя некомфортно, когда мне нужно делиться своими чувствами.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Preoccupation',
    },
    {
      id: 'q9',
      text: 'Близкие отношения заставляют меня чувствовать себя уязвимым.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'NeedForApproval',
    },
    {
      id: 'q10',
      text: 'Мне трудно быть открытым с другими людьми.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
    {
      id: 'q11',
      text: 'Мне важно, чтобы другие одобряли мои отношения.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Preoccupation',
    },
    {
      id: 'q12',
      text: 'Я часто беспокоюсь о том, что подумают другие о моем партнере.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'NeedForApproval',
    },
    {
      id: 'q13',
      text: 'Мое чувство собственного достоинства зависит от того, как другие видят мои отношения.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q14',
      text: 'Я часто чувствую, что мне нужно одобрение от других, чтобы чувствовать себя хорошо в отношениях.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Discomfort',
      reverse: true,
    },
    {
      id: 'q15',
      text: 'Я чувствую себя неуверенно, если мои отношения не одобряются другими.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'NeedForApproval',
    },
    {
      id: 'q16',
      text: 'Я часто беспокоюсь о том, что мои отношения могут закончиться.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
    {
      id: 'q17',
      text: 'Я часто думаю о том, как улучшить свои отношения.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Preoccupation',
    },
    {
      id: 'q18',
      text: 'Я чувствую тревогу, когда мой партнер не рядом.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q19',
      text: 'Мои мысли часто заняты моими отношениями.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
      reverse: true,
    },
    {
      id: 'q20',
      text: 'Я боюсь, что мой партнер может меня бросить.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'NeedForApproval',
    },
    {
      id: 'q21',
      text: 'Для меня важнее личные достижения, чем близкие отношения.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q22',
      text: 'Я считаю, что отношения не должны мешать моим личным целям.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Discomfort',
      reverse: true,
    },
    {
      id: 'q23',
      text: 'Я предпочитаю независимость, а не зависимость от партнера.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Preoccupation',
    },
    {
      id: 'q24',
      text: 'Я не хочу, чтобы отношения занимали центральное место в моей жизни.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q25',
      text: 'Я могу легко обходиться без близких отношений.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
    {
      id: 'q26',
      text: 'Я избегаю близости в отношениях, чтобы защитить себя.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Discomfort',
      reverse: true,
    },
    {
      id: 'q27',
      text: 'Мне трудно доверять другим людям.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Discomfort',
      reverse: true,
    },
    {
      id: 'q28',
      text: 'Я предпочитаю не зависеть от других.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Preoccupation',
    },
    {
      id: 'q29',
      text: 'Я избегаю ситуаций, которые могут привести к конфликту в отношениях.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
    {
      id: 'q30',
      text: 'Я стараюсь не быть слишком эмоционально вовлеченным в отношения.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'NeedForApproval',
    },
    {
      id: 'q31',
      text: 'Я часто чувствую тревогу по поводу своих отношений.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q32',
      text: 'Я боюсь, что мой партнер не любит меня так сильно, как я его.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
      reverse: true,
    },
    {
      id: 'q33',
      text: 'Я чувствую себя неуверенно, если мой партнер не уделяет мне достаточно внимания.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Preoccupation',
    },
    {
      id: 'q34',
      text: 'Я часто нуждаюсь в заверениях, что мой партнер заботится обо мне.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'NeedForApproval',
    },
    {
      id: 'q35',
      text: 'Я часто чувствую, что мой партнер может меня отвергнуть.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Confidence',
    },
    {
      id: 'q36',
      text: 'Я чувствую себя комфортно, когда другие полагаются на меня.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'Discomfort',
      reverse: true,
    },
    {
      id: 'q37',
      text: 'Я часто чувствую, что мне нужно больше близости в отношениях.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
    {
      id: 'q38',
      text: 'Я избегаю эмоциональной близости, чтобы не чувствовать себя уязвимым.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
    {
      id: 'q39',
      text: 'Я чувствую себя некомфортно, когда мои отношения не одобряются другими.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
    {
      id: 'q40',
      text: 'Я считаю, что отношения не так важны, как моя независимость.',
      options: [
        { value: '1', text: 'Совершенно не согласен' },
        { value: '2', text: 'Скорее не согласен' },
        { value: '3', text: 'Чуть не согласен' },
        { value: '4', text: 'Нейтрально' },
        { value: '5', text: 'Чуть согласен' },
        { value: '6', text: 'Скорее согласен' },
        { value: '7', text: 'Совершенно согласен' },
      ],
      dimension: 'RelationshipsSecondary',
    },
  ];

  useEffect(() => {
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 0);
  }, [currentQuestionIndex]);

  const handleAnswerChange = (questionId, value) => {
    if (answers[questionId] !== value) {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value,
      }));
    }
  };

  const handleNextQuestion = () => {
    if (answers[questions[currentQuestionIndex].id] !== null && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateResult = () => {
    // Initialize scores for each subscale
    const scores = {
      Confidence: [],
      Discomfort: [],
      NeedForApproval: [],
      Preoccupation: [],
      RelationshipsSecondary: [],
    };

    // Group answers into subscales and apply reverse scoring
    questions.forEach(question => {
      const answerValue = answers[question.id];
      if (answerValue) {
        let value = parseInt(answerValue);
        // Apply reverse scoring if needed (for scale 1-7)
        if (question.reverse) {
          value = 8 - value; // Reverse scoring: 1->7, 2->6, ..., 7->1
        }
        scores[question.dimension].push(value);
      }
    });

    // Calculate mean scores for each subscale
    const meanScores = {};
    for (const [scale, values] of Object.entries(scores)) {
      if (values.length > 0) {
        meanScores[scale] = values.reduce((sum, val) => sum + val, 0) / values.length;
      } else {
        meanScores[scale] = 0;
      }
    }

    // Calculate total score (sum of all answers)
    const totalScore = Object.values(answers).reduce((sum, value) => sum + (parseInt(value) || 0), 0);

    // Calculate average score (total score divided by number of questions)
    const averageScore = totalScore / questions.length;

    // Logistic regression simulation for attachment style prediction
    const { Confidence, Discomfort, NeedForApproval, Preoccupation, RelationshipsSecondary } = meanScores;

    // Define weights for each attachment style (simulated logistic regression coefficients)
    const weights = {
      Secure: {
        Confidence: 1.5,
        Discomfort: -1.0,
        NeedForApproval: -0.8,
        Preoccupation: -1.2,
        RelationshipsSecondary: -0.5,
        bias: -2.0,
      },
      Avoidant: {
        Confidence: -0.5,
        Discomfort: 1.2,
        NeedForApproval: -0.3,
        Preoccupation: -0.8,
        RelationshipsSecondary: 1.0,
        bias: 0.0,
      },
      Anxious: {
        Confidence: -0.3,
        Discomfort: -0.2,
        NeedForApproval: 1.0,
        Preoccupation: 1.2,
        RelationshipsSecondary: -0.4,
        bias: -1.0,
      },
      FearfulAvoidant: {
        Confidence: -1.0,
        Discomfort: 1.0,
        NeedForApproval: 0.8,
        Preoccupation: 1.0,
        RelationshipsSecondary: 0.5,
        bias: -0.5,
      },
    };

    // Calculate logits for each attachment style
    const logits = {
      Secure:
        weights.Secure.bias +
        weights.Secure.Confidence * Confidence +
        weights.Secure.Discomfort * Discomfort +
        weights.Secure.NeedForApproval * NeedForApproval +
        weights.Secure.Preoccupation * Preoccupation +
        weights.Secure.RelationshipsSecondary * RelationshipsSecondary,
      Avoidant:
        weights.Avoidant.bias +
        weights.Avoidant.Confidence * Confidence +
        weights.Avoidant.Discomfort * Discomfort +
        weights.Avoidant.NeedForApproval * NeedForApproval +
        weights.Avoidant.Preoccupation * Preoccupation +
        weights.Avoidant.RelationshipsSecondary * RelationshipsSecondary,
      Anxious:
        weights.Anxious.bias +
        weights.Anxious.Confidence * Confidence +
        weights.Anxious.Discomfort * Discomfort +
        weights.Anxious.NeedForApproval * NeedForApproval +
        weights.Anxious.Preoccupation * Preoccupation +
        weights.Anxious.RelationshipsSecondary * RelationshipsSecondary,
      FearfulAvoidant:
        weights.FearfulAvoidant.bias +
        weights.FearfulAvoidant.Confidence * Confidence +
        weights.FearfulAvoidant.Discomfort * Discomfort +
        weights.FearfulAvoidant.NeedForApproval * NeedForApproval +
        weights.FearfulAvoidant.Preoccupation * Preoccupation +
        weights.FearfulAvoidant.RelationshipsSecondary * RelationshipsSecondary,
    };

    // Convert logits to probabilities using softmax
    const expLogits = {
      Secure: Math.exp(logits.Secure),
      Avoidant: Math.exp(logits.Avoidant),
      Anxious: Math.exp(logits.Anxious),
      FearfulAvoidant: Math.exp(logits.FearfulAvoidant),
    };
    const sumExpLogits = expLogits.Secure + expLogits.Avoidant + expLogits.Anxious + expLogits.FearfulAvoidant;

    const probabilities = {
      Secure: expLogits.Secure / sumExpLogits,
      Avoidant: expLogits.Avoidant / sumExpLogits,
      Anxious: expLogits.Anxious / sumExpLogits,
      FearfulAvoidant: expLogits.FearfulAvoidant / sumExpLogits,
    };

    // Determine the attachment style with the highest probability
    const attachmentStyles = [
      { style: 'Безопасный стиль привязанности (Secure)', prob: probabilities.Secure },
      { style: 'Избегающий стиль привязанности (Avoidant)', prob: probabilities.Avoidant },
      { style: 'Тревожный стиль привязанности (Anxious)', prob: probabilities.Anxious },
      { style: 'Тревожно-избегающий стиль привязанности (Fearful-Avoidant)', prob: probabilities.FearfulAvoidant },
    ];

    const attachmentStyle = attachmentStyles.reduce((max, current) => (current.prob > max.prob ? current : max), attachmentStyles[0]).style;

    // Determine recommendation based on total score
    let recommendation = '';
    if (totalScore <= 80) {
      recommendation = {
        level: 'Высокий уровень проблем с привязанностью',
        package: 'Расширенный Пакет',
        packageLink: '/our-service',
        description: 'Твой стиль привязанности может создавать проблемы в отношениях. Наш расширенный пакет поможет тебе работать над этим.',
      };
    } else if (totalScore <= 120) {
      recommendation = {
        level: 'Средний уровень проблем с привязанностью',
        package: 'Базовый Пакет',
        packageLink: '/our-service',
        description: 'У тебя есть некоторые сложности с привязанностью. Наш базовый пакет поможет тебе улучшить отношения.',
      };
    } else {
      recommendation = {
        level: 'Низкий уровень проблем с привязанностью',
        package: 'Бесплатный Вводный Пакет',
        packageLink: '/free-package',
        description: 'У тебя здоровый стиль привязанности! Наш бесплатный вводный пакет поможет тебе поддерживать гармоничные отношения.',
      };
    }

    setResult({
      score: totalScore,
      averageScore: averageScore,
      attachmentStyle,
      recommendation,
      scores: meanScores,
    });
  };

  const closeTest = () => {
    setIsTestOpen(false);
    setCurrentQuestionIndex(0);
    setAnswers({
      q1: null, q2: null, q3: null, q4: null, q5: null,
      q6: null, q7: null, q8: null, q9: null, q10: null,
      q11: null, q12: null, q13: null, q14: null, q15: null,
      q16: null, q17: null, q18: null, q19: null, q20: null,
      q21: null, q22: null, q23: null, q24: null, q25: null,
      q26: null, q27: null, q28: null, q29: null, q30: null,
      q31: null, q32: null, q33: null, q34: null, q35: null,
      q36: null, q37: null, q38: null, q39: null, q40: null,
    });
    setResult(null);
    setShowShareOptions(false);
  };

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaEmail = () => {
    if (!result) return;
    const subject = 'Мои результаты теста: Опросник стиля привязанности. ASQ';
    const body = `Средний балл: ${result.averageScore?.toFixed(2) || '0.00'} из 7\nСтиль привязанности: ${result.attachmentStyle}\nРекомендация: ${result.recommendation?.description || ''}\nПредлагаемый пакет: ${result.recommendation?.package || ''}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaWhatsApp = () => {
    if (!result) return;
    const text = `Мои результаты теста: Опросник стиля привязанности. ASQ\nСредний балл: ${result.averageScore?.toFixed(2) || '0.00'} из 7\nСтиль привязанности: ${result.attachmentStyle}\nРекомендация: ${result.recommendation?.description || ''}\nПредлагаемый пакет: ${result.recommendation?.package || ''}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const printResult = () => {
    if (!result) return;
    const printContent = `
      <h3>Результаты теста: Опросник стиля привязанности. ASQ</h3>
      <p><strong>Средний балл:</strong> ${result.averageScore?.toFixed(2) || '0.00'} из 7</p>
      <p><strong>Стиль привязанности:</strong> ${result.attachmentStyle}</p>
      <p><strong>Уверенность (Confidence):</strong> ${result.scores?.Confidence?.toFixed(2) || '0.00'} из 7</p>
      <p><strong>Дисфория с близостью (Discomfort with Closeness):</strong> ${result.scores?.Discomfort?.toFixed(2) || '0.00'} из 7</p>
      <p><strong>Потребность в одобрении (Need for Approval):</strong> ${result.scores?.NeedForApproval?.toFixed(2) || '0.00'} из 7</p>
      <p><strong>Озабоченность отношениями (Preoccupation with Relationships):</strong> ${result.scores?.Preoccupation?.toFixed(2) || '0.00'} из 7</p>
      <p><strong>Отношения как второстепенные (Relationships as Secondary):</strong> ${result.scores?.RelationshipsSecondary?.toFixed(2) || '0.00'} из 7</p>
      <p><strong>Рекомендация:</strong> ${result.recommendation?.description || ''}</p>
      <p><strong>Предлагаемый пакет:</strong> ${result.recommendation?.package || ''}</p>
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Результаты теста</title>
          <style>
            body { font-family: 'Playfair Display', serif; text-align: left; }
            h3 { font-size: 20px; color: #143B64; }
            p { font-size: 16px; color: #2F4C66; }
          </style>
        </head>
        <body>
          ${printContent}
          <script>window.print(); window.close();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const allQuestionsAnswered = Object.values(answers).every(answer => answer !== null);

  return (
    <div className="attachment-style-test">
      <div className="free-package-section">
        <div className="section-content">
          <h3 className="section-title" onClick={() => setIsTestOpen(!isTestOpen)}>
            Опросник стиля привязанности. ASQ
            <i className={`las la-angle-down dropdown-icon ${isTestOpen ? 'open' : ''}`}></i>
          </h3>
          <p className="section-description">
            Как ты выстраиваешь отношения — и что за этим стоит? Опросник стиля привязанности поможет лучше понять, как ты взаимодействуешь с окружающими и какие психологические механизмы лежат в основе твоего поведения. Это инструмент самодиагностики, основанный на теории привязанности, который даст ценные инсайты о твоих привычных моделях в отношениях. Пройди тест — и начни менять свою жизнь к лучшему.
            <span className="test-info">
              онлайн-тест | 40 пунктов | около 7 минут
            </span>
          </p>
          {isTestOpen && (
            <>
              <div className="test-container">
                {result ? (
                  <div className="test-result">
                    <p className="score-info"><strong>Средний балл:</strong></p>
                    <div className="score-bar">
                      <div
                        className="score-progress"
                        style={{
                          width: `${(result.averageScore / 7) * 100}%`,
                          backgroundColor: result.averageScore <= 2 ? '#ff4d4d' : result.averageScore <= 4 ? '#ffd700' : '#32cd32',
                        }}
                      ></div>
                      <span className="score-label" style={{ position: 'absolute', left: `${(result.averageScore / 7) * 100}%`, transform: 'translateX(-50%)' }}>
                        {result.averageScore?.toFixed(2) || '0.00'}
                      </span>
                    </div>
                    <div className="score-range">
                      <span>0</span>
                      <span>7</span>
                    </div>

                    {/* Bar Chart for Subscale Scores */}
                    <p className="score-info"><strong>Подшкалы:</strong></p>
                    <div className="subscale-chart">
                      <div className="bar-container">
                        <span className="bar-label">Уверенность (Confidence)</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores?.Confidence || 0) / 7) * 100}%`,
                              backgroundColor: '#21aabc',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores?.Confidence?.toFixed(2) || '0.00'}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Дисфория с близостью (Discomfort with Closeness)</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores?.Discomfort || 0) / 7) * 100}%`,
                              backgroundColor: '#ff4d4d',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores?.Discomfort?.toFixed(2) || '0.00'}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Потребность в одобрении (Need for Approval)</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores?.NeedForApproval || 0) / 7) * 100}%`,
                              backgroundColor: '#ffd700',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores?.NeedForApproval?.toFixed(2) || '0.00'}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Озабоченность отношениями (Preoccupation with Relationships)</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores?.Preoccupation || 0) / 7) * 100}%`,
                              backgroundColor: '#32cd32',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores?.Preoccupation?.toFixed(2) || '0.00'}</span>
                        </div>
                      </div>
                      <div className="bar-container">
                        <span className="bar-label">Отношения как второстепенные (Relationships as Secondary)</span>
                        <div className="bar">
                          <div
                            className="bar-fill"
                            style={{
                              width: `${((result.scores?.RelationshipsSecondary || 0) / 7) * 100}%`,
                              backgroundColor: '#ff8c00',
                            }}
                          ></div>
                          <span className="bar-value">{result.scores?.RelationshipsSecondary?.toFixed(2) || '0.00'}</span>
                        </div>
                      </div>
                    </div>

                    <p className="level-info"><strong>Стиль привязанности:</strong> {result.attachmentStyle || ''}</p>
                    <p><strong>Уверенность (Confidence):</strong> {result.scores?.Confidence?.toFixed(2) || '0.00'} из 7</p>
                    <p><strong>Дисфория с близостью (Discomfort with Closeness):</strong> {result.scores?.Discomfort?.toFixed(2) || '0.00'} из 7</p>
                    <p><strong>Потребность в одобрении (Need for Approval):</strong> {result.scores?.NeedForApproval?.toFixed(2) || '0.00'} из 7</p>
                    <p><strong>Озабоченность отношениями (Preoccupation with Relationships):</strong> {result.scores?.Preoccupation?.toFixed(2) || '0.00'} из 7</p>
                    <p><strong>Отношения как второстепенные (Relationships as Secondary):</strong> {result.scores?.RelationshipsSecondary?.toFixed(2) || '0.00'} из 7</p>
                    <p><strong>Рекомендация:</strong> {result.recommendation?.description || ''}</p>
                    <p>
                      <strong>Предлагаемый пакет:</strong>{' '}
                      <Link to={result.recommendation?.packageLink || '#'} className="recommended-package-link">
                        {result.recommendation?.package || ''}
                      </Link>
                    </p>
                    <div className="share-section">
                      <button onClick={closeTest} className="close-test-button">
                        Закрыть тест
                      </button>
                      <div className="share-container">
                        <i
                          className="las la-share share-icon"
                          onClick={toggleShareOptions}
                          title="Поделиться результатами"
                        ></i>
                        {showShareOptions && (
                          <div className="share-options">
                            <button onClick={shareViaEmail}>Email</button>
                            <button onClick={printResult}>Печать</button>
                            <button onClick={shareViaWhatsApp}>WhatsApp</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className={`test-question ${fadeIn ? 'fade-in' : ''}`}>
                      <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].text}</h3>
                      <div className="options">
                        {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                          <label key={optionIndex} className="option-label" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name={questions[currentQuestionIndex].id}
                              value={option.value}
                              checked={answers[questions[currentQuestionIndex].id] === option.value}
                              onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option.value)}
                              className="custom-radio"
                            />
                            <span style={{ marginLeft: '10px' }}>{option.text}</span>
                          </label>
                        ))}
                      </div>
                      {currentQuestionIndex < questions.length - 1 ? (
                        <button
                          type="button"
                          onClick={handleNextQuestion}
                          className="submit-test-button"
                          disabled={answers[questions[currentQuestionIndex].id] === null}
                        >
                          Следующий вопрос
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={calculateResult}
                          className="submit-test-button"
                          disabled={!allQuestionsAnswered}
                        >
                          Узнать результаты
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="test-footer-info">
                <p className="author-info">
                  <strong>Автор:</strong> J. Feeney et al. (1994)
                </p>
                <p className="disclaimer-info">
                  Тест предоставляется исключительно в образовательных и развлекательных целях. Он не предназначен для психологических консультаций любого рода и не гарантирует точности или достоверности. Оценка бесплатна и анонимна. Вы можете сохранить прямую ссылку на свои результаты.
                </p>
                <p>
                  <strong>Ссылки:</strong><br />
                  <a
                    href="https://www.guilford.com/books/Attachment-in-Adults/Mark-Baldwin/9781593854577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    Дж. А. Фини, П. Ноллер, М. Ханрахан. Оценка взрослой привязанности // Привязанность у взрослых: клинические и развивающие перспективы. Нью-Йорк: Guilford Press, 1994.
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AttachmentStyleQuestionnaire;