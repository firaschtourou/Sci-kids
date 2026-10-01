import React, { useState } from "react";
import axios from "axios";
import "./chapiterbuilder.css"; // Importez le fichier CSS

const ChapterBuilder = () => {
  const [chapters, setChapters] = useState([]);
  const [className, setClassName] = useState("");

  const addChapter = () => {
    setChapters((prevChapters) => [
      ...prevChapters,
      {
        name: "",
        contentBlocks: [{ type: "", title: "", text: "", videoFile: null }],
      },
    ]);
  };

  const updateChapterName = (index, value) => {
    setChapters((prevChapters) => {
      const updatedChapters = [...prevChapters];
      updatedChapters[index].name = value;
      return updatedChapters;
    });
  };

  const addContentBlock = (chapterIndex) => {
    setChapters((prevChapters) => {
      const updatedChapters = [...prevChapters];
      updatedChapters[chapterIndex].contentBlocks.push({
        type: "",
        title: "",
        text: "",
        videoFile: null,
      });
      return updatedChapters;
    });
  };

  const removeContentBlock = (chapterIndex, blockIndex) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette partie ?")) {
      setChapters((prevChapters) => {
        const updatedChapters = [...prevChapters];
        updatedChapters[chapterIndex].contentBlocks.splice(blockIndex, 1);
        return updatedChapters;
      });
    }
  };

  const updateContentBlock = (chapterIndex, blockIndex, field, value) => {
    setChapters((prevChapters) => {
      const updatedChapters = [...prevChapters];
      updatedChapters[chapterIndex].contentBlocks[blockIndex][field] = value;
      return updatedChapters;
    });
  };

  const updateBlockType = (chapterIndex, blockIndex, type) => {
    setChapters((prevChapters) => {
      const updatedChapters = [...prevChapters];
      updatedChapters[chapterIndex].contentBlocks[blockIndex].type = type;
      return updatedChapters;
    });
  };

  const handleVideoUpload = (chapterIndex, blockIndex, file) => {
    setChapters((prevChapters) => {
      const updatedChapters = [...prevChapters];
      updatedChapters[chapterIndex].contentBlocks[blockIndex].videoFile = file;
      return updatedChapters;
    });
  };

  const removeChapter = (index) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce chapitre ?")) {
      setChapters((prevChapters) => {
        const updatedChapters = [...prevChapters];
        updatedChapters.splice(index, 1);
        return updatedChapters;
      });
    }
  };

  const handleSave = async () => {
    const isAnyChapterFilled = chapters.some(
      (chapter) => chapter.name.trim() !== "" && chapter.contentBlocks.some((block) => block.title.trim() !== "")
    );
  
    if (!isAnyChapterFilled) {
      alert("Vous devez remplir au moins un chapitre avant de sauvegarder.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("className", className);
      formData.append("chapterName", chapters[0].name);
      formData.append("title", "Titre du contenu pédagogique");

      const contents = chapters.flatMap((chapter) =>
        chapter.contentBlocks.map((block) => ({
          title: block.title,
          paragraph: block.text,
          video: block.videoFile ? block.videoFile.name : null,
        }))
      );
      formData.append("contents", JSON.stringify(contents));

      chapters.forEach((chapter) => {
        chapter.contentBlocks.forEach((block) => {
          if (block.videoFile) {
            formData.append("videos", block.videoFile);
          }
        });
      });

      const response = await axios.post("https://backendversion0.onrender.com/api/pedagogical-content/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Chapitres sauvegardés avec succès !");
      console.log("Réponse du serveur :", response.data);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      alert("Erreur lors de l'enregistrement des chapitres.");
    }
  };

  return (
    <div className="chapter-builder-container">
      <h2>Créer des Chapitres</h2>
      <input
        type="text"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        placeholder="Nom de la classe"
        className="class-name-input"
      />
      <button type="button" onClick={addChapter} className="add-chapter-button">
        Ajouter un Chapitre
      </button>

      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex} className="chapter-container">
          <h3>Chapitre {chapterIndex + 1}</h3>
          <label>
            <strong>Nom du chapitre *</strong>
          </label>
          <input
            type="text"
            value={chapter.name}
            onChange={(e) => updateChapterName(chapterIndex, e.target.value)}
            placeholder="Saisissez le nom du chapitre"
            className="chapter-name-input"
          />

          {chapter.contentBlocks.map((block, blockIndex) => (
            <div key={blockIndex} className="content-block-container">
              <label>
                <strong>Titre de la partie *</strong>
              </label>
              <input
                type="text"
                value={block.title}
                onChange={(e) =>
                  updateContentBlock(chapterIndex, blockIndex, "title", e.target.value)
                }
                placeholder="Saisissez le titre de la partie"
                className="content-block-title-input"
              />

              <label>
                <strong>Choisissez le type de contenu</strong>
              </label>
              <select
                value={block.type}
                onChange={(e) =>
                  updateBlockType(chapterIndex, blockIndex, e.target.value)
                }
                className="content-type-select"
              >
                <option value="">Sélectionnez</option>
                <option value="text">Texte</option>
                <option value="video">Vidéo</option>
                <option value="both">Les deux</option>
              </select>

              {(block.type === "text" || block.type === "both") && (
                <>
                  <label>
                    <strong>Texte</strong>
                  </label>
                  <textarea
                    value={block.text}
                    onChange={(e) =>
                      updateContentBlock(chapterIndex, blockIndex, "text", e.target.value)
                    }
                    placeholder="Texte du bloc"
                    rows="3"
                    className="content-block-textarea"
                  />
                </>
              )}

              {(block.type === "video" || block.type === "both") && (
                <>
                  <label>
                    <strong>Vidéo</strong>
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) =>
                      handleVideoUpload(chapterIndex, blockIndex, e.target.files[0])
                    }
                    className="video-upload-input"
                  />
                  {block.videoFile && (
                    <p className="video-file-name">
                      <em>Vidéo importée : {block.videoFile.name}</em>
                    </p>
                  )}
                </>
              )}

              <button
                type="button"
                onClick={() => removeContentBlock(chapterIndex, blockIndex)}
                className="remove-content-block-button"
              >
                Supprimer cette partie
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addContentBlock(chapterIndex)}
            className="add-content-block-button"
          >
            Ajouter un Bloc
          </button>

          <button
            type="button"
            onClick={() => removeChapter(chapterIndex)}
            className="remove-chapter-button"
          >
            Supprimer le Chapitre
          </button>
        </div>
      ))}

      <button type="button" onClick={handleSave} className="save-button">
        Sauvegarder
      </button>
    </div>
  );
};

export default ChapterBuilder;