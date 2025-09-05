---
tags:
  - type: tag is-status
    value: 🚧 WIP
  - type: tag is-status
    value: Tool
  - type: tag
    value: UE5
  - type: tag
    value: C++
  - type: tag
    value: Python
  - type: tag
    value: WPF
  - type: tag
    value: C#
thumbnail: /assets/images/thumbnails/dialogue-graph.png
links:
---

# UE5 Dialogue Graph Plugin

### 05/2024 - present

🚧 *Work in Progress*

Group of modular Unreal Engine plugins bringing custom dialogue assets and a graph editor in the engine.
Dialogues are made of nodes containing localiseable dialogue lines, audio, animations, camera positions and conditions to check or set (e.g. check whether an item is in the inventory).
The idea is also to enable standalone work to some extent, using WPF editors and tools besides Unreal.

- Designed and implemented a custom dialogue asset and its graph editor.
- Enabled multi-environment collaboration through automated XML import-export scripts.
- Streamlined and secured the creation of story flag assets (key events) with a custom editor that can create, import, export, update and move flags while preserving links and ensuring proper project architecture (which can be configured).
- Created a WPF tool to edit flags, and other XML files, outside of Unreal. 
- Implemented a dialogue manager for playing dialogues in-game.
