// src/pages/HotelFeedbackPage.jsx
import { useState } from 'react';
import { Container, Form, Button, ProgressBar, Alert, Image } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../mockData';

export default function HotelFeedbackPage() {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [overallRating, setOverallRating] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [staffService, setStaffService] = useState(0);
  const [amenities, setAmenities] = useState(0);
  const [foodDining, setFoodDining] = useState(0);
  const [location, setLocation] = useState(0);
  const [valueForMoney, setValueForMoney] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Find hotel
  let hotel = null;
  for (const dest of destinations) {
    hotel = dest.hotels.find(h => h.id === hotelId);
    if (hotel) break;
  }

  if (!hotel) {
    return (
      <Container className="my-5 text-center">
        <h2>Hotel Not Found</h2>
        <Button onClick={() => navigate(-1)} variant="outline-primary">Go Back</Button>
      </Container>
    );
  }

  // First image from array
  const hotelImage = 
    (Array.isArray(hotel.images) && hotel.images[0]) ||
    (Array.isArray(hotel.image) && hotel.image[0]) ||
    'https://images.unsplash.com/photo-1564507592333-c60657eea523';

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
      hotelId,
      hotelName: hotel.name,
      overallRating,
      cleanliness,
      comfort,
      staffService,
      amenities,
      foodDining,
      location,
      valueForMoney,
      feedback,
      photos: photos.map(p => p.name),
      video: video?.name || null,
      date: new Date().toISOString().split('T')[0]
    };

    const existing = JSON.parse(localStorage.getItem('hotelFeedbacks') || '[]');
    existing.push(newFeedback);
    localStorage.setItem('hotelFeedbacks', JSON.stringify(existing));

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
          src={hotelImage}
          alt={hotel.name}
          className="w-100 h-100"
          style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-4">
          <h1 className="display-3 fw-bold text-shadow">{hotel.name}</h1>
          <p className="lead fs-4 text-shadow">How was your stay?</p>
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
            Thank you! Your hotel feedback with media has been saved.
          </Alert>
        )}

        <Form onSubmit={handleSubmit} className="bg-white p-5 rounded-4 shadow-lg">
          {/* Overall Experience */}
          <BigStarRating rating={overallRating} setRating={setOverallRating} label="How would you rate your overall experience?" />
          <hr className="my-5" />

          {/* Cleanliness */}
          <BigStarRating rating={cleanliness} setRating={setCleanliness} label="How clean was your room and hotel area?" />
          {cleanliness > 0 && (
            <div className="mt-4 px-5">
              <div className="d-flex justify-content-between small text-muted mb-2">
                <span>Needs Work</span>
                <span>Spotless</span>
              </div>
              <ProgressBar now={cleanliness * 20} variant="success" style={{ height: '14px' }} className="rounded-pill" />
            </div>
          )}
          <hr className="my-5" />

          {/* Comfort */}
          <BigStarRating rating={comfort} setRating={setComfort} label="Was your room comfortable and well-maintained?" />
          <hr className="my-5" />

          {/* Staff Service */}
          <BigStarRating rating={staffService} setRating={setStaffService} label="How friendly and helpful was the staff?" />
          <hr className="my-5" />

          {/* Amenities */}
          <BigStarRating rating={amenities} setRating={setAmenities} label="Rate the amenities (WiFi, pool, gym, etc.)" />
          <hr className="my-5" />

          {/* Food & Dining */}
          <BigStarRating rating={foodDining} setRating={setFoodDining} label="How was the quality and variety of the food?" />
          <hr className="my-5" />

          {/* Location */}
          <BigStarRating rating={location} setRating={setLocation} label="Was the location convenient for your activities?" />
          <hr className="my-5" />

          {/* Value for Money */}
          <BigStarRating rating={valueForMoney} setRating={setValueForMoney} label="Do you feel the stay was worth the price?" />
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
            <small className="text-muted">Show off the best views!</small>
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
            <small className="text-muted">Max 30 sec clip of your experience</small>
          </div>

          {/* Written Feedback */}
          <div className="mb-5">
            <Form.Label className="fw-bold fs-5">Anything else? (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Best part of your stay? Suggestions? Hidden gems?"
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
              Submit Hotel Feedback
            </Button>
          </div>

          <p className="text-center mt-4 text-muted small">
            Your review helps travelers choose the perfect stay.
          </p>
        </Form>
      </Container>
    </div>
  );
}