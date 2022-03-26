import io
import argparse
import os

import torch
from transformers import BertTokenizerFast, BertForTokenClassification

from prtfolios.settings import BASE_DIR
from .usecase.utils import preprocess_data, predict, idx2tag

# app = Flask(__name__)
# app.config['JSON_SORT_KEYS'] = False


MAX_LEN = 500
NUM_LABELS = 14
DEVICE = torch.device("cpu")
MODEL_PATH = 'bert-base-uncased'
model = os.path.join(BASE_DIR, "resume_parser\\model-state.bin")
STATE_DICT = torch.load(model, map_location=DEVICE)
vocab = os.path.join(BASE_DIR, "resume_parser\\vocab\\vocab.txt")
TOKENIZER = BertTokenizerFast(vocab, lowercase=True)

model = BertForTokenClassification.from_pretrained(
    'bert-base-uncased', state_dict=STATE_DICT['model_state_dict'], num_labels=NUM_LABELS)
model.to(DEVICE)


# @app.route('/predict', methods=['POST'])
# def predict_api():
#     if request.method == 'POST':
#         data = io.BytesIO(request.files.get('resume').read())
#         resume_text = preprocess_data(data)
#         entities = predict(model, TOKENIZER, idx2tag,
#                            DEVICE, resume_text, MAX_LEN)
#         return jsonify({'entities': entities})

def predict_(file):
    data = io.BytesIO(file.read())
    resume_text = preprocess_data(data)
    entities = predict(model, TOKENIZER, idx2tag, DEVICE, resume_text, MAX_LEN)
    return {'predictions': entities}

# if __name__ == '__main__':
#     app.run()
