// src/pages/SiteFeedbackPage.jsx
import { useState } from 'react';
import { Container, Form, Button, ProgressBar, Alert, Image } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../mockData';

export default function SiteFeedbackPage() {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const [overallRating, setOverallRating] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [accessibility, setAccessibility] = useState(0);
  const [safety, setSafety] = useState(0);
  const [staffHelpfulness, setStaffHelpfulness] = useState(0);
  const [facilities, setFacilities] = useState(0);
  const [valueForMoney, setValueForMoney] = useState(0);
  const [crowdManagement, setCrowdManagement] = useState(0);
  const [information, setInformation] = useState(0);
  const [photography, setPhotography] = useState(0);
  const [crowdLevel, setCrowdLevel] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Find site
  let site = null;
  for (const dest of destinations) {
    site = dest.sites.find(s => s.id === siteId);
    if (site) break;
  }

  if (!site) {
    return (
      <Container className="my-5 text-center">
        <h2>Site Not Found</h2>
        <Button onClick={() => navigate(-1)} variant="outline-primary">Go Back</Button>
      </Container>
    );
  }

  const siteImage = 
    (Array.isArray(site.images) && site.images[0]) || 
    (Array.isArray(site.image) && site.image[0]) ||
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34';

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setPhotos(prev => [...prev, ...previews]);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo({
        file,
        url: URL.createObjectURL(file),
        name: file.name
      });
    }
  };

  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const removeVideo = () => setVideo(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (overallRating === 0) {
      alert('Please rate your overall experience.');
      return;
    }

    const newFeedback = {
      siteId,
      siteName: site.name,
      overallRating,
      cleanliness,
      accessibility,
      safety,
      staffHelpfulness,
      facilities,
      valueForMoney,
      crowdManagement,
      information,
      photography,
      crowdLevel,
      feedback,
      photos: photos.map(p => p.name),
      video: video?.name || null,
      date: new Date().toISOString().split('T')[0]
    };

    const existing = JSON.parse(localStorage.getItem('siteFeedbacks') || '[]');
    existing.push(newFeedback);
    localStorage.setItem('siteFeedbacks', JSON.stringify(existing));

    setShowSuccess(true);
    setTimeout(() => navigate(-1), 2000);
  };

  const BigStarRating = ({ rating, setRating, label }) => (
    <div className="text-center py-4">
      <p className="fw-bold fs-5 mb-3">{label}</p>
      <div className="d-flex justify-content-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`fs-1 ${star <= rating ? 'text-warning' : 'text-muted'} transition-all`}
            onClick={() => setRating(star)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      <p className="mt-2 text-muted fs-6">
        {rating === 0 ? 'Tap to rate' : `${rating} / 5`}
      </p>
    </div>
  );

  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Header */}
      <div className="position-relative overflow-hidden" style={{ height: '60vh' }}>
        <img
          src={siteImage}
          alt={site.name}
          className="w-100 h-100"
          style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-4">
          <h1 className="display-3 fw-bold text-shadow">{site.name}</h1>
          <p className="lead fs-4 text-shadow">How was your visit?</p>
        </div>
        <Button
          variant="light"
          className="position-absolute top-0 start-0 m-3"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>

      <Container className="py-5">
        {showSuccess && (
          <Alert variant="success" className="text-center mb-5">
            Thank you! Your detailed site feedback has been saved.
          </Alert>
        )}

        <Form onSubmit={handleSubmit} className="bg-white p-5 rounded-4 shadow-lg">
          {/* Overall Experience */}
          <BigStarRating 
            rating={overallRating} 
            setRating={setOverallRating} 
            label="How would you rate your overall experience at this place?" 
          />
          <hr className="my-5" />

          {/* Cleanliness */}
          <BigStarRating 
            rating={cleanliness} 
            setRating={setCleanliness} 
            label="Was the site clean and well-maintained?" 
          />
          {cleanliness > 0 && (
            <div className="mt-4 px-5">
              <div className="d-flex justify-content-between small text-muted mb-2">
                <span>Dirty</span>
                <span>Spotless</span>
              </div>
              <ProgressBar now={cleanliness * 20} variant="success" style={{ height: '14px' }} className="rounded-pill" />
            </div>
          )}
          <hr className="my-5" />

          {/* Accessibility */}
          <BigStarRating 
            rating={accessibility} 
            setRating={setAccessibility} 
            label="Was it easy to reach and move around the site?" 
          />
          <hr className="my-5" />

          {/* Safety & Security */}
          <BigStarRating 
            rating={safety} 
            setRating={setSafety} 
            label="Did you feel safe during your visit?" 
          />
          <hr className="my-5" />

          {/* Staff/Guide Helpfulness */}
          <BigStarRating 
            rating={staffHelpfulness} 
            setRating={setStaffHelpfulness} 
            label="Were staff or guides polite and informative?" 
          />
          <hr className="my-5" />

          {/* Facilities */}
          <BigStarRating 
            rating={facilities} 
            setRating={setFacilities} 
            label="Rate the quality of restrooms, seating, parking, etc." 
          />
          <hr className="my-5" />

          {/* Value for Money */}
          <BigStarRating 
            rating={valueForMoney} 
            setRating={setValueForMoney} 
            label="Was the entry fee or cost reasonable for the experience?" 
          />
          <hr className="my-5" />

          {/* Crowd Management */}
          <BigStarRating 
            rating={crowdManagement} 
            setRating={setCrowdManagement} 
            label="Was the place overcrowded or well-managed?" 
          />
          <hr className="my-5" />

          {/* Information Availability */}
          <BigStarRating 
            rating={information} 
            setRating={setInformation} 
            label="Were signboards, maps, and descriptions clear?" 
          />
          <hr className="my-5" />

          {/* Photography Options (Optional) */}
          <BigStarRating 
            rating={photography} 
            setRating={setPhotography} 
            label="Was the place good for taking photos? (optional)" 
          />
          <hr className="my-5" />

          {/* Crowd Level */}
          <div className="text-center py-4">
            <p className="fw-bold fs-5 mb-4">How crowded was it?</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {[
                { val: 1, label: 'Empty', color: 'success' },
                { val: 3, label: 'Moderate', color: 'warning' },
                { val: 5, label: 'Packed', color: 'danger' }
              ].map(({ val, label, color }) => (
                <Button
                  key={val}
                  variant={crowdLevel === val ? color : `outline-${color}`}
                  size="lg"
                  onClick={() => setCrowdLevel(val)}
                  className="px-5 py-3 fw-bold"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <hr className="my-5" />

          {/* Photo Upload */}
          <div className="mb-5">
            <Form.Label className="fw-bold fs-5">Upload Photos (optional)</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="mb-3"
            />
            <div className="d-flex flex-wrap gap-3">
              {photos.map((photo, i) => (
                <div key={i} className="position-relative">
                  <Image
                    src={photo.url}
                    rounded
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <Button
                    size="sm"
                    variant="danger"
                    className="position-absolute top-0 end-0"
                    onClick={() => removePhoto(i)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
            <small className="text-muted">Show the best views!</small>
          </div>

          <hr className="my-5" />

          {/* Video Upload */}
          <div className="mb-5">
            <Form.Label className="fw-bold fs-5">Upload Video (Optional)</Form.Label>
            <Form.Control
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="mb-3"
            />
            {video && (
              <div className="position-relative d-inline-block">
                <video
                  controls
                  style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                  className="rounded"
                >
                  <source src={video.url} />
                </video>
                <Button
                  size="sm"
                  variant="danger"
                  className="position-absolute top-0 end-0"
                  onClick={removeVideo}
                >
                  ×
                </Button>
              </div>
            )}
            <small className="text-muted">Max 30 sec clip of your visit</small>
          </div>

          <hr className="my-5" />

          {/* Written Feedback */}
          <div className="mb-5">
            <Form.Label className="fw-bold fs-5">Share your tips (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Best time to visit? Hidden photo spots? Any tips for others?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="border-2 fs-6"
              style={{ resize: 'none' }}
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="px-5 py-3 fw-bold"
              style={{ background: '#ff385c', border: 'none' }}
            >
              Submit Site Feedback
            </Button>
          </div>

          <p className="text-center mt-4 text-muted small">
            Your detailed review helps travelers plan better.
          </p>
        </Form>
      </Container>
    </div>
  );
}