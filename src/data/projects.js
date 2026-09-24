// TODO: add real GitHub repo URLs (and live demo URLs where they exist).
// Leaving `github: null` renders no button rather than a fake/broken link.
export const projects = [
  {
    id: 'fire-detection',
    title: 'Real-Time Fire Detection from RTSP Camera Streams',
    shortTitle: 'Real-Time Fire Detection',
    tag: 'Computer Vision · Real-Time',
    description:
      'A computer vision pipeline that watches live RTSP camera streams and flags fire in real time for monitoring applications — built around continuous frame ingestion, not single-image classification.',
    contribution:
      'Built the RTSP stream simulator used to test the pipeline, integrated FFmpeg and MediaMTX into the streaming workflow, and worked on the frame-processing and detection path end to end.',
    problem: 'Fixed cameras generate continuous RTSP video, but most fire-detection demos only classify static images — no real streaming path, no alerting.',
    solution: 'A pipeline that pulls live RTSP frames, runs YOLO-based detection on them, and raises a real-time alert the moment fire is detected.',
    result:
      'Completed and integrated into an existing Energy Management System (EMS) application, providing continuous fire and smoke detection across multiple concurrent RTSP camera feeds for industrial safety monitoring.',
    pipeline: ['RTSP Camera', 'Frame Processing', 'YOLO Detection', 'Fire / No Fire', 'Real-Time Alert'],
    tech: ['Python', 'Computer Vision', 'YOLO', 'FFmpeg', 'MediaMTX', 'RTSP'],
    github: null,
    demo: null,
    status: 'Industry Project \u00b7 Aattral Research Private Limited',
    featured: true,
  },
  {
    id: 'dr-transformer',
    title: 'Explainable Lesion-Aware Multimodal Transformer for Personalized Diabetic Retinopathy Severity Grading',
    shortTitle: 'Lesion-Aware Multimodal DR Grading',
    tag: 'Deep Learning · Multimodal · Explainable AI',
    description:
      'A multimodal deep learning system that combines retinal fundus images with clinical biomarkers to grade diabetic retinopathy severity, with explainability built in rather than bolted on.',
    contribution:
      'Designed the multimodal architecture combining a YOLO-based lesion detector with a Vision Transformer image encoder and a separate clinical encoder, and integrated Grad-CAM and SHAP for interpretability.',
    problem: 'Most DR grading models rely on the fundus image alone and give a severity score with no explanation clinicians can act on.',
    solution: 'Fuse lesion-level visual features with structured clinical biomarkers in a single transformer-based architecture, and pair every prediction with visual and feature-level explanations.',
    result: 'An academic prototype demonstrating lesion-aware, multimodal severity grading with Grad-CAM and SHAP explanations for clinical decision support.',
    pipeline: [
      'Retinal Fundus Image + Clinical Biomarkers',
      'Preprocessing',
      'YOLO Lesion Detection',
      'Vision Transformer + Clinical Encoder',
      'Lesion-Aware Multimodal Transformer',
      'DR Severity Prediction',
      'Grad-CAM + SHAP',
      'Clinical Decision Support',
    ],
    tech: ['Python', 'PyTorch', 'YOLO', 'Vision Transformer', 'SHAP', 'Grad-CAM', 'Deep Learning', 'Multimodal Learning'],
    github: null,
    demo: null,
    status: 'Academic Project \u00b7 In Progress',
    featured: true,
  },
  {
    id: 'brain-tumor',
    title: 'Automated Brain Tumor Diagnosis Using YOLO-Based Deep Learning',
    shortTitle: 'Brain Tumor Diagnosis (YOLO)',
    tag: 'Computer Vision · Deep Learning',
    description:
      'A computer vision pipeline that detects and identifies brain tumors from MRI images using YOLOv8 \u2014 trained as a four-class detection model covering glioma, meningioma, pituitary tumor, and no tumor, achieving 94.4% accuracy.',
    contribution:
      'Used a Roboflow-provided MRI dataset, trained and evaluated the YOLOv8 model, and implemented tumor localization with bounding boxes alongside multi-class tumor identification.',
    problem: 'Manual review of MRI scans for tumor presence is slow and depends on radiologist availability.',
    solution: 'A YOLO-based detector trained on MRI scans, wrapped in a simple Streamlit app for fast, interactive screening.',
    architectureImage: '/brain-tumor-architecture.png',
    tech: ['Python', 'TensorFlow', 'YOLO', 'Deep Learning', 'Computer Vision', 'Streamlit'],
    github: 'https://github.com/madhumitha-sivanathan/brain-tumor-api',
    demo: null,
    status: 'Academic Project',
    featured: true,
  },
];
