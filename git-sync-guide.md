# Git Sync Guide: Edit Your Website on Any Device

## What This Does
Instead of having two copies of your website code on different laptops, you use **GitHub as the middleman**. One device pushes changes up, the other device pulls them down. GitHub keeps everything in sync.

---

## One-Time Setup (Do This Once Per Device)

### On Each Device, Run These 4 Commands in Order:

```bash
git init
git remote add origin https://github.com/jleok/johnleokirkpatrick.com.git
git branch -M main
git pull origin main
```

**That's it.** Both devices now have the latest code from GitHub.

---

## Daily Workflow: How to Push and Pull

### When You Make Changes (On Any Device)

| Step | Command | What It Does |
|------|---------|--------------|
| 1 | `git add .` | Stage all your changes |
| 2 | `git commit -m "describe what you changed"` | Save the changes locally with a message |
| 3 | `git push` | Upload changes to GitHub |

**Example:**
```bash
git add .
git commit -m "Updated homepage hero section"
git push
```

---

### When You Switch to the Other Device

| Step | Command | What It Does |
|------|---------|--------------|
| 1 | `cd ~/website` | Go to your website folder |
| 2 | `git pull` | Download the latest changes from GitHub |

**Example:**
```bash
cd ~/website
git pull
```

---

## First-Time Git Setup (One-Time Only)

Before you can commit, Git needs to know who you are.

**Run this once:**
```bash
git config --global user.email "your-email@gmail.com"
git config --global user.name "John Leo"
```

Replace `your-email@gmail.com` with your actual email.

---

## Typical Day Workflow

### Device A (Ubuntu):
```bash
cd ~/website
git add .
git commit -m "Fixed CSS bug on homepage"
git push
```

### Device B (Other Laptop):
```bash
cd ~/website
git pull
# Your changes from Device A are now here
git add .
git commit -m "Updated footer text"
git push
```

### Back to Device A:
```bash
cd ~/website
git pull
# Your other laptop's changes are now here
```

---

## Key Rules to Remember

| Rule | Why |
|------|-----|
| **Always `git pull` before you start work** | Ensures you have the latest changes from the other device |
| **Always `git push` before switching devices** | Makes sure your changes are saved to GitHub |
| **Write clear commit messages** | So you remember what you changed and why |
| **`git add .` before commit** | Tells git which files to save |

---

## Quick Reference Cheat Sheet

```
BEFORE YOU START WORK:
  git pull

AFTER YOU MAKE CHANGES:
  git add .
  git commit -m "what you changed"
  git push

SWITCHING TO OTHER DEVICE:
  git pull
```

---

## Troubleshooting

### "fatal: not a git repository"
**Fix:** You're not in the website folder. Run:
```bash
cd ~/website
```

### "nothing to commit, working tree clean"
**This is good.** It means all your changes are already saved and pushed.

### "Author identity unknown"
**Fix:** You skipped the first-time setup. Run:
```bash
git config --global user.email "your-email@gmail.com"
git config --global user.name "John Leo"
```

### "The current branch main has no upstream branch"
**Fix:** Run:
```bash
git push --set-upstream origin main
```

---

## That's It!

You now have a synced workflow. Both devices pull from GitHub, make changes, and push back. No manual file copying needed.

**Start with this rhythm:**
1. Pull before you work
2. Commit after you change something
3. Push before you switch devices
4. Pull on the other device

Done.
